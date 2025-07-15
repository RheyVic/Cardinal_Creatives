<?php
// Simple deployment script for static files
echo "Deploying Cardinal Creatives static files...\n";

// Check if out directory exists
if (!is_dir('out')) {
    echo "Error: 'out' directory not found. Please run the build process first.\n";
    exit(1);
}

// Copy files from out directory to current directory
function copyDirectory($src, $dst) {
    $dir = opendir($src);
    if (!is_dir($dst)) {
        mkdir($dst, 0755, true);
    }
    
    while (($file = readdir($dir)) !== false) {
        if ($file != '.' && $file != '..') {
            if (is_dir($src . '/' . $file)) {
                copyDirectory($src . '/' . $file, $dst . '/' . $file);
            } else {
                copy($src . '/' . $file, $dst . '/' . $file);
            }
        }
    }
    closedir($dir);
}

// Copy static files
echo "Copying static files...\n";
copyDirectory('out', '.');

echo "Deployment completed successfully!\n";
echo "Website is ready to serve.\n";
?>
