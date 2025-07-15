<?php
// Simple router for static Next.js export
$request = $_SERVER['REQUEST_URI'];
$path = parse_url($request, PHP_URL_PATH);

// Remove leading slash
$path = ltrim($path, '/');

// Default to index.html
if (empty($path) || $path === '/') {
    $path = 'index.html';
}

// Add .html extension if not present and file exists
if (!pathinfo($path, PATHINFO_EXTENSION)) {
    if (file_exists($path . '.html')) {
        $path .= '.html';
    }
}

// Check if file exists
if (file_exists($path)) {
    $mimeType = mime_content_type($path);
    header('Content-Type: ' . $mimeType);
    readfile($path);
    exit;
}

// If file not found, try 404.html
if (file_exists('404.html')) {
    http_response_code(404);
    header('Content-Type: text/html');
    readfile('404.html');
    exit;
}

// Fallback 404
http_response_code(404);
echo '404 - Page Not Found';
?>
