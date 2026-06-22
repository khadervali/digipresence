<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$rawBody = file_get_contents('php://input');
$payload = json_decode($rawBody ?: '{}', true);

if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid payload']);
    exit;
}

$name = trim((string)($payload['name'] ?? ''));
$email = trim((string)($payload['email'] ?? ''));
$need = trim((string)($payload['need'] ?? ''));
$source = trim((string)($payload['source'] ?? 'website'));

if ($name === '' || $email === '' || $need === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Invalid email']);
    exit;
}

$to = getenv('DP_LEADS_EMAIL') ?: 'hello@digipresence.in';
$subject = 'New DigiPresence Lead';

$messageLines = [
    'New lead from DigiPresence website',
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    'Need: ' . $need,
    'Source: ' . $source,
    'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'),
    'User-Agent: ' . ($_SERVER['HTTP_USER_AGENT'] ?? 'unknown'),
    'Time: ' . gmdate('c'),
];

$message = implode("\n", $messageLines);

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: DigiPresence Website <no-reply@digipresence.in>',
    'Reply-To: ' . $email,
];

$emailSent = @mail($to, $subject, $message, implode("\r\n", $headers));

$whatsAppNumber = getenv('DP_WHATSAPP_NUMBER') ?: '919000000000';
$waText = rawurlencode("Hi DigiPresence, I submitted the form. Name: {$name}, Email: {$email}, Need: {$need}");
$waUrl = "https://wa.me/{$whatsAppNumber}?text={$waText}";

if (!$emailSent) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'error' => 'Email delivery failed on server. Configure mail() or SMTP relay.',
        'whatsapp_url' => $waUrl,
    ]);
    exit;
}

echo json_encode([
    'ok' => true,
    'email_sent' => true,
    'whatsapp_url' => $waUrl,
]);
