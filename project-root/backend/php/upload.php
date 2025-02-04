<?php
// This is a simple PHP file upload handler.
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['file'])) {
    $uploadDirectory = 'uploads/';
    $filePath = $uploadDirectory . basename($_FILES['file']['name']);

    if (move_uploaded_file($_FILES['file']['tmp_name'], $filePath)) {
        echo "File uploaded successfully!";
    } else {
        echo "Error uploading file.";
    }
}
?>
