<?php
//index
error_reporting(E_ALL);
ini_set('display_startup_errors', 1);
ini_set('display_errors', '1');

require_once 'Y29ubmVjdAo.php'; // подключаем скрипт

$link = mysqli_connect($host, $user, $password, $database)
or die("Ошибка " . mysqli_error($link));

$queryCheckUserPhoneEmail = "SELECT phone,email FROM cscart_users";
$resultCheckUserPhoneEmail = mysqli_query($link, $queryCheckUserPhoneEmail) or die("Ошибка " . mysqli_error($link));
$usersPhone = $_POST['phone'];
$usersEmail = $_POST['email'];
// if (empty($usersPhone)){
//     $usersPhone=0;
// };

$users = [];
while ($rows = mysqli_fetch_assoc($resultCheckUserPhoneEmail)) {
    array_push(
        $users, [
            'email' => $rows['email'],
            'phone' => $rows['phone']
        ]

        
    );
    
}
foreach ($users as $user) {
    if ($user['phone'] == $usersPhone || $user['email'] == $usersEmail) {
        $a = true;
        print_r($a) ;
    } else {
        $a ='';
        print_r($a) ;
    }
    ;
}
;

// foreach ($data as $data){
//         if ($rows[0] == $usersPhone || $rows[1]==$usersEmail){
//             return $usersEmail;
//         }else{
//             return $usersEmail;
//         }
//     }
