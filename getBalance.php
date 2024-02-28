<?php
require_once "https://raw.githubusercontent.com/Oshwaa/Oshwaa.github.io/main/config.php";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the data from the POST request
    $user_id = isset($_POST['user_ID']) ? $_POST['user_ID'] : null;

// Check if data is received
if ($user_id !== null) {
    // Android App registered user ID
    $sql = "SELECT Balance FROM users WHERE ID = ?";
    $stmt = $conn->prepare($sql);

    // Bind parameters
    $stmt->bind_param("s", $user_id); // 's' = string putangina

    // Execute the statement
    $stmt->execute();

    // Get the result
    $result = $stmt->get_result();

    // Check if there are results
    if ($result->num_rows > 0) {
        // Fetch the row as an associative array
        $row = $result->fetch_assoc();

        // Output the result as JSON
        echo json_encode(['Balance' => floatval($row['Balance'])]);
    } else {
        echo json_encode(['error' => 'No results']);
    }

    // Close the statement
    $stmt->close();
} else {
    echo json_encode(['error' => 'Invalid data']);
}

} else {
    echo json_encode(['error' => 'Invalid request method']);
}

// Close the connection
$conn->close();
?>
