const web3 = new Web3(window.ethereum);

const JACKPOT = [{"inputs":[{"internalType":"address payable","name":"holdersAddr","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint8","name":"plan","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"percent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"profit","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"finish","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_prev","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_new","type":"uint256"}],"name":"SetExtraGas","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_prev","type":"address"},{"indexed":false,"internalType":"address","name":"_new","type":"address"}],"name":"SetHeap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_from","type":"address"},{"indexed":false,"internalType":"address","name":"_to","type":"address"}],"name":"TransferOwnership","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Winner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"DECREASE_DAY_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"HOLDERS_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INVEST_MIN_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INVEST_MIN_TO_REFER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LAUNCH_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LUCKYDRAW_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENT_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UNLOCK_REFERRER_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"extraGas","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"planTime","type":"uint256"}],"name":"getDecreaseDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"uint256","name":"_cat","type":"uint256"}],"name":"getNonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getPlanInfo","outputs":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"deposit","type":"uint256"}],"name":"getResult","outputs":[{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"profit","type":"uint256"},{"internalType":"uint256","name":"current","type":"uint256"},{"internalType":"uint256","name":"finish","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserAmountOfDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserAmountOfPenaltyDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserAvailable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserCheckpoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getUserDepositInfo","outputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"percent","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"profit","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"finish","type":"uint256"},{"internalType":"bool","name":"force","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserDividends","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"getUserDownlineCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferralTotalBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalDeposits","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"heap","outputs":[{"internalType":"contract Heap","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_i","type":"uint256"}],"name":"heapEntry","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"heapIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"heapSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"heapTop","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"holdersAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_referrer","type":"address"},{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"invest","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isValidReferrer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"reInvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_gas","type":"uint256"}],"name":"setExtraGas","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract Heap","name":"_heap","type":"address"}],"name":"setHeap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"topSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalUserDepositValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unlockReferrer","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"checkpoint","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"totalBonus","type":"uint256"},{"internalType":"uint256","name":"holdBonus","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const jackpotAddress = '0xA9Fe6C45C14012ACFdefb19EB90d42dd14Fa9482';

const holdersAddress = '';

var jackpot = new web3.eth.Contract(JACKPOT, jackpotAddress);

var walletAddress = web3.givenProvider.selectedAddress;


//Balance of user in each plan
var goldBalance;
var silverBalance;
var bronzeBalance;
var emeraldBalance;
var rubyBalance;
var sapphireBalance;

//Pending rewards of user in each plan
var goldPending;
var silverPending;
var bronzePending;
var emeraldPending;
var rubyPending;
var sapphirePending;

//Claimed rewards of user in each plan
var goldRewards;
var silverRewards;
var bronzeRewards;
var emeraldRewards;
var rubyRewards;
var sapphireRewards;

//Total balance staked in each plan
var goldTotalStaked;
var silverTotalStaked;
var bronzeTotalStaked;
var emeraldTotalStaked;
var rubyTotalStaked;
var sapphireTotalStaked;



//STAKE PLANS

async function depositGold() {
	var goldinput = document.getElementById("toStakeGold");
	var amount = await goldinput.value;
	var user_referrer = holdersAddress;
	await jackpot.methods.invest(user_referrer, 0).send( 
		{from: web3.givenProvider.selectedAddress,
		value: web3.utils.toWei(amount)}).on('receipt', function(receipt) {
		console.log(receipt);
	});
}

async function depositSilver() {
	var silverinput = document.getElementById("toStakeSilver");
	var amount = await silverinput.value;
	var user_referrer = holdersAddress;
	await jackpot.methods.invest(user_referrer, 1).send( 
		{from: web3.givenProvider.selectedAddress,
		value: web3.utils.toWei(amount)}).on('receipt', function(receipt) {
		console.log(receipt);
	});
}

async function depositBronze() {
	var bronzeinput = document.getElementById("toStakeBronze");
	var amount = await bronzeinput.value;
	var user_referrer = holdersAddress;
	await jackpot.methods.invest(user_referrer, 2).send( 
		{from: web3.givenProvider.selectedAddress,
		value: web3.utils.toWei(amount)}).on('receipt', function(receipt) {
		console.log(receipt);
	});
}

async function depositEmerald() {
	var emeraldinput = document.getElementById("toStakeEmerald");
	var amount = await emeraldinput.value;
	var user_referrer = holdersAddress;
	await jackpot.methods.invest(user_referrer, 3).send( 
		{from: web3.givenProvider.selectedAddress,
		value: web3.utils.toWei(amount)}).on('receipt', function(receipt) {
		console.log(receipt);
	});
}

async function depositRuby() {
	var rubyinput = document.getElementById("toStakeRuby");
	var amount = await rubyinput.value;
	var user_referrer = holdersAddress;
	await jackpot.methods.invest(user_referrer, 4).send( 
		{from: web3.givenProvider.selectedAddress,
		value: web3.utils.toWei(amount)}).on('receipt', function(receipt) {
		console.log(receipt);
	});
}

async function depositSapphire() {
	var sapphireinput = document.getElementById("toStakeSapphire");
	var amount = await sapphireinput.value;
	var user_referrer = holdersAddress;
	await jackpot.methods.invest(user_referrer, 5).send( 
		{from: web3.givenProvider.selectedAddress,
		value: web3.utils.toWei(amount)}).on('receipt', function(receipt) {
		console.log(receipt);
	});
}


//REINVEST

async function reinvest() {
	var plan = document.getElementById("reinvestPlan").value;
	await jackpot.methods.reInvest(plan).send( 
		{from: web3.givenProvider.selectedAddress}).on('receipt', function(receipt) {
		console.log(receipt);
	});
}



//WITHDRAW

async function unstake() {
	await jackpot.methods.withdraw().send( {from: web3.givenProvider.selectedAddress}).on('receipt', function(receipt) {
		console.log(receipt);
	});
}

//GET

async function getBalanceBNB(address) {
	bnbBalance = await web3.eth.getBalance(walletAddress);
	document.getElementById("bnbBalance").innerHTML = Number(web3.utils.fromWei(bnbBalance)).toFixed(2);
}

async function getBalanceToken(address) {
	tokenBalance = await web3.eth.getBalance(walletAddress);
	document.getElementById("tokenBalance").innerHTML = Number(web3.utils.fromWei(tokenBalance)).toFixed(2);
}


async function getTotalStaked() {
	await jackpot.methods.totalStaked().call().then(r => {
		document.getElementById("totalStaked").innerHTML = Number(web3.utils.fromWei(r)).toFixed(4);
	});
}


async function isGoldApproved() {
    let _goldAllowance = await gold.methods.allowance(walletAddress, pumpkinAddress).call();
    let appDiv = document.getElementById("approveDiv");
    if (Number(_goldAllowance) > 0) {
        appDiv.hidden = true;
        appDiv.removeAttribute("style");
    }
}





//MAGIC

async function startWeb3() {
	await window.ethereum.enable();
	var accounts = await web3.eth.getAccounts();
	walletAddress = accounts[0];
	document.getElementsByClassName("address")[0].innerHTML = walletAddress;
	getBalanceBNB(walletAddress);
    getGoldRoi();
    

    var goldinput = document.getElementById('toStake');


    var approveGold = document.getElementById('approve-gold');
    approveGold.addEventListener("click", approvegold);



		                

}

            

				


//https://github.com/ethereumjs/ethereumjs-units
//https://eth-converter.com/extended-converter.html
BigNumber.config({EXPONENTIAL_AT: 31})

var toEther = {
	wei: "0.000000000000000001",
	kwei: "0.000000000000001",
	mwei: "0.000000000001",
	gwei: "0.000000001",
	szabo: "0.000001",
	finney: "0.001",
	ether: "1",
	kether: "1000",
	mether: "1000000",
	gether: "1000000000",
	tether: "1000000000000"
};

var scale = {
	wei: "1000000000000000000",
	kwei: "1000000000000000",
	mwei: "1000000000000",
	gwei: "1000000000",
	szabo: "1000000",
	finney: "1000",
	ether: "1",
	kether: "0.001",
	mether: "0.000001",
	gether: "0.000000001",
	tether: "0.000000000001"
};

var initialSupply = 50000000000000000000000000;
var teamSupply    = 3250000000000000000000000;
var totalSupply;
var tokensHolded;

function update() {

        startWeb3();
        

}

function convert(e, t, n) {
	var i = new BigNumber(e);
	return (i = i.times(new BigNumber(toEther[t]))).times(new BigNumber(scale[n]));
}

//Format a bignumber to display correctly
function format(bignumber) {
	fmt = {
		decimalSeparator: '.',
		groupSeparator: ','
	}

	if (bignumber.isGreaterThanOrEqualTo(1000000)) {
		return bignumber.div(1000000).toFormat(2, fmt).replace('.00', '') + 'M';
	} else if (bignumber.isGreaterThanOrEqualTo(1000)) {
		return bignumber.div(1000).toFormat(2, fmt).replace('.00', '') + 'm';
	} else {
		return bignumber.toFormat(2, fmt).replace('.00', '');
	}
}



function httpGetAsync(theUrl, callback, parameter = 0) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() { 
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp.responseText, parameter);
	}
	xmlHttp.open("GET", theUrl, true); // true for asynchronous 
	xmlHttp.send(null);
}


function selectMaxAmount() {
	if (document.getElementById('q1').checked) {
		document.getElementById('token_amount').value = userTokenBalance;
		document.getElementById('total_receive').innerHTML = Number((document.getElementById('token_amount').value*totalSupplyFSS/FMAinStaking*0.97).toFixed(3));

	} else if (document.getElementById('q2').checked) {
		document.getElementById('token_amount').value = userStakeBalance;
		document.getElementById('total_receive').innerHTML = Number((document.getElementById('token_amount').value*FMAinStaking/totalSupplyFSS).toFixed(3));

	}
}



window.onload = update();
