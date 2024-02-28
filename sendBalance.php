<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once "C:\\xampp\\htdocs\\phpprograms\\config.php";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to update balance using prepared statements
function updateBalance($conn, $userID, $updateAmount) {
    $sql = "UPDATE users SET Balance = Balance + ? WHERE ID = ?";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("is", $updateAmount, $userID);
    
    if ($stmt->execute()) {
        return true; // Return true for success
    } else {
        return false; // Return false for failure
    }

   
}

// Function to insert a transaction record
function insertTransaction($conn, $sender, $amount, $type, $endpoint) {
    $sql = "INSERT INTO transactions (ID, Date, Amount, Type, Endpoint) VALUES (?, CURDATE(), ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("siss", $sender, $amount, $type, $endpoint);
    
    if ($stmt->execute()) {
        return true; // Return true for success
    } else {
        return false; // Return false for failure
    }

    
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve data from POST request using prepared statements
    $sender_ID = $_POST['user_ID'];
    $recipient_ID = $_POST['recipient'];
    $amount = $_POST['amount'];

    // Check if sender and recipient exist in the database using prepared statements
    $checkSenderRecipientQuery = "SELECT COUNT(*) as count FROM users WHERE ID IN (?, ?)";
    
    $checkStmt = $conn->prepare($checkSenderRecipientQuery);
    $checkStmt->bind_param("ss", $sender_ID, $recipient_ID);
    
    if ($checkStmt->execute()) {
        $checkResult = $checkStmt->get_result();
        $row = $checkResult->fetch_assoc();

        if ($row['count'] == 2) {
            // Both sender and recipient exist, check if sender has enough balance
            $checkBalanceQuery = "SELECT Balance FROM users WHERE ID = ?";
            
            $balanceStmt = $conn->prepare($checkBalanceQuery);
            $balanceStmt->bind_param("s", $sender_ID);
            
            if ($balanceStmt->execute()) {
                $balanceResult = $balanceStmt->get_result();
                $balanceRow = $balanceResult->fetch_assoc();
                $senderBalance = $balanceRow['Balance'];

                if ($senderBalance >= $amount) {
                    // Sender has enough balance, perform the balance update
                    // Subtract balance from sender
                    if (updateBalance($conn, $sender_ID, -$amount) && 
                        // Add balance to recipient
                        updateBalance($conn, $recipient_ID, $amount) &&
                        // Insert transaction record for the sender
                        insertTransaction($conn, $sender_ID, $amount, 'Sent', $recipient_ID) &&
                        // Insert transaction record for the recipient
                        insertTransaction($conn, $recipient_ID, $amount, 'Received', $sender_ID)) {
                        
                        // Return JSON response
                        echo "Success";
                    } else {
                        echo "Error updating balance or inserting transaction records\n";
                    }
                } else {
                    echo "Insufficient Balance.\n";
                }
            } else {
                echo "Server Error, try again later: " . $balanceStmt->error . "\n";
            }

            $balanceStmt->close();
        } else {
            echo "Recipient does not exist.\n";
        }
    } else {
        echo "Server Error, try again later: " . $checkStmt->error . "\n";
    }

    $checkStmt->close();
} else {
    // If the request method is not POST, handle accordingly (if needed)
    echo "Invalid request method\n";
}

$conn->close();
?>
