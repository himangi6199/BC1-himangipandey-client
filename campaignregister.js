
//---------------------WEB3 Config---------------------------

const web3 = new Web3("ws://127.0.0.1:7545");
const voting = new web3.eth.Contract(votingAbi, votingAddress);

let defaultAccount;

web3.eth.getAccounts()
    .then(
        accounts => defaultAccount=accounts[0]
        );

voting.defaultAccount = defaultAccount;
//---------------------WEB3 Config----------------------------


//---------------------Buttons Event Handling-----------------
const handleSignupClick = () => {
    handle_signup();
}
const signinBtn = document.getElementById("button_signup");
signinBtn.addEventListener("click",handleSignupClick);
//---------------------Buttons Event Handling------------------


//-----------------Handle signup------------------------------
const handle_signup = () => {
    
    const user_address = document.getElementById("input_address").value;
    const user_name = document.getElementById("input_name").value;
    const new_campaign_name = document.getElementById("input_pin").value;
    

    const options = {
        from: user_address,
        gas: "3000000",
        gasPrice: "1000000"
    };

    voting
    .methods.signIn(pin).send({
        from: userAddress,
        gas: "3000000",
        gasPrice: "1000000"
    }).on("receipt",
    function (receipt) {
        console.log("Login In Success:",userAddress);
        logData = userAddress;
        sessionStorage.clear();
        sessionStorage.setItem("logs", userAddress);
        setTimeout(function(){ 
            window.location.replace("./dashboard.html");              
         }, 3000);
        
    })
    .on("error",
            function (error, receipt) {
                console.log(error,receipt);
            }
    );
}
//-----------------Handle signup------------------------------


