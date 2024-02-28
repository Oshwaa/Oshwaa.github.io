<?php
require_once "C:\\xampp\\htdocs\\phpprograms\\config.php";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function addFareToDriver($conn, $driver, $fare) {
    // Prepare the statement to update the driver's balance
    $stmtUpdateDriver = $conn->prepare("UPDATE users SET Balance = Balance + ? WHERE ID = ?");
    // Bind the parameters
    $stmtUpdateDriver->bind_param("is", $fare, $driver);
    // Execute the update query for the driver
    if ($stmtUpdateDriver->execute()) {
        echo "Unlock";;
    } else {
        echo "Error updating driver's balance: " . $stmtUpdateDriver->error;
    }
    $stmtUpdateDriver->close();
}
function insertTransaction($conn, $sender, $amount, $type, $endpoint) {
    $sql = "INSERT INTO transactions (ID, Date, Amount, Type, Endpoint) VALUES (?, CURDATE(), ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("siss", $sender, $amount, $type, $endpoint);
    $stmt->execute();
    if($stmt->execute()){
        return true;
    }
    else{
        return false;
    }
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $rfid = $_POST["rfid"];

    // Check if the 'fare' parameter is present
    if (isset($_POST["fare"]) && isset($_POST["driver"])) {
        $fare = $_POST["fare"];
        $driver = $_POST["driver"];

        // Prepare the statement to fetch the user's information based on the RFID
        $stmt = $conn->prepare("SELECT * FROM users WHERE ID = ?");
        // Bind the parameter
        $stmt->bind_param("s", $rfid);
        // Execute the query
        $stmt->execute();
        // Get the result
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            if ($row["ID"] == $driver) {

                echo "Unlock";
            } else {
                // Check if the driver exists in the ID column
                $stmtDriver = $conn->prepare("SELECT * FROM users WHERE ID = ?");
                $stmtDriver->bind_param("s", $driver);
                $stmtDriver->execute();
                $resultDriver = $stmtDriver->get_result();
                if ($resultDriver->num_rows > 0) {
                    $balance = $row["Balance"];
                    if ($balance >= $fare) {
                        $balance -= $fare; // Subtract $fare directly from $balance

                        // Prepare the update statement for the current RFID
                        $stmtUpdate = $conn->prepare("UPDATE users SET Balance = ? WHERE ID = ?");
                        // Bind the parameters
                        $stmtUpdate->bind_param("is", $balance, $rfid);
                        // Execute the update query
                        if ($stmtUpdate->execute()) {
                            if(insertTransaction($conn, $rfid, $fare,'Paid',$driver)&&
                            insertTransaction($conn, $driver, $fare,'Collected',$rfid)){
                                addFareToDriver($conn, $driver, $fare);
                            }
                        } else {
                            echo "Error updating balance: " . $stmtUpdate->error;
                        }
                        $stmtUpdate->close();
                    } else {
                        echo "Insufficient balance";
                    }
                } else {
                    
                    echo "Driver's RFID not found";
                }
                $stmtDriver->close();
            }
        } else {
            
            echo "RFID not found";
        }

        $stmt->close();
    } else {
       
        echo "Fare or driver parameter is missing";
    }
}

$conn->close();
?>