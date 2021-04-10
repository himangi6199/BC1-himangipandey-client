
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
    
    const new_user_address = document.getElementById("input_address").value;
    const new_user_name = document.getElementById("input_name").value;
    const new_user_pin = document.getElementById("input_pin").value;
    const new_user_campaign_name = document.getElementById("input_name").value;

    const options = {
        from: new_user_address,
        gas: "3000000",
        gasPrice: "1000000"
    };

    voting
        .methods.signUp(new_user_name, new_user_pin).send(options)
        .on("receipt",
            function (receipt) {
                console.log(receipt);
            })
            .on("error",
                    function (error, receipt) {
                        document.getElementById("registration_event").innerHTML = "User Already Registered";
                    }
            ).then(document.getElementById("registration_event").innerHTML = new_user_address);
}
//-----------------Handle signup------------------------------


