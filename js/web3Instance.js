const web3 = new Web3(window.ethereum);

const JACKPOT = '';

const jackpotAddress = '';


var jackpot = new web3.eth.Contract(JACKPOT, jackpotAddress);

var bnbBalance;
var ethAddress = "";


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


async function getGoldRoi() {
	let _uniSupply = await gold.methods.totalSupply().call();
        let _goldDiff = await pumpkin.methods.difficultyGold().call();
        let _pumpkinOnPair = await gold.methods.getReserves().call();
        let _halloweenAmount = _pumpkinOnPair[0];
	let _pumpkinAmount = _pumpkinOnPair[1];
        let _totalPumpkinValue = _pumpkinAmount * 2;
        let _uniPumpkinValue = _totalPumpkinValue/_uniSupply;
	let _roi = 2252571/_goldDiff/_uniPumpkinValue*100;
	let _goldRoi = document.getElementById("goldroi");
	_goldRoi.innerHTML = Number(_roi).toFixed(2);
}

async function getSilverRoi() {
        let _pumpkinOnCauld = await gold.methods.getReserves().call();
        let _halloweenAmountCauld = _pumpkinOnCauld[0];
	let _pumpkinAmountCauld = _pumpkinOnCauld[1];
	let _halloweenPrice = _pumpkinAmountCauld/_halloweenAmountCauld;
	let _uniSupply = await silver.methods.totalSupply().call();
        let _silverDiff = await pumpkin.methods.difficultySilver().call();
	let _silverInfo = await silver.methods.getReserves().call();
	let _halloweenAmount = _silverInfo[1];
	let _totalPumpkinValue = _halloweenAmount * 2 * _halloweenPrice;
	let _uniSilverValue = _totalPumpkinValue/_uniSupply;
	let _roi = 2252571/_silverDiff/_uniSilverValue*100;
	let _silverRoi = document.getElementById("silverroi");
	_silverRoi.innerHTML = Number(_roi).toFixed(2);

}



async function getBronzeRoi() {
        let _pumpkinOnCauld = await gold.methods.getReserves().call();
        let _halloweenAmountCauld = _pumpkinOnCauld[0];
	let _pumpkinAmountCauld = _pumpkinOnCauld[1];
	let _halloweenPrice = _pumpkinAmountCauld/_halloweenAmountCauld;
	let _uniSupply = await bronze.methods.totalSupply().call();
        let _bronzeDiff = await pumpkin.methods.difficultyBronze().call();
	let _bronzeInfo = await bronze.methods.getReserves().call();
	let _halloweenAmount = _bronzeInfo[0];
	let _totalPumpkinValue = _halloweenAmount * 2 * _halloweenPrice;
	let _uniBronzeValue = _totalPumpkinValue/_uniSupply;
	let _roi = 2252571/_bronzeDiff/_uniBronzeValue*100;
	let _bronzeRoi = document.getElementById("bronzeroi");
	_bronzeRoi.innerHTML = Number(_roi).toFixed(2);

}




async function claimRewards() {
     await this.jackpot.methods.claim().send({
        from: ethAddress
      });
}

async function stakedGold() {
        await pumpkin.methods.getGold(ethAddress).call().then(r => {
          document.getElementById('rightTokens').innerHTML = Number(web3.utils.fromWei(r)).toFixed(7);
          document.getElementById('balanceorstaked').innerHTML = Number(web3.utils.fromWei(r)).toFixed(7);
        });
}

async function stakedSilver() {
        await pumpkin.methods.getSilver(ethAddress).call().then(r => {
          document.getElementById('rightTokens').innerHTML = Number(web3.utils.fromWei(r)).toFixed(7);
          document.getElementById('balanceorstaked').innerHTML = Number(web3.utils.fromWei(r)).toFixed(7);
        });
}

async function stakedBronze() {
        await pumpkin.methods.getBronze(ethAddress).call().then(r => {
          document.getElementById('rightTokens').innerHTML = Number(web3.utils.fromWei(r)).toFixed(7);
          document.getElementById('balanceorstaked').innerHTML = Number(web3.utils.fromWei(r)).toFixed(7);
        });
}

async function claimGoldRewards() {
     await this.halloweenInstance.methods.getPumpkinReward().send({
        from: ethAddress
      });
}


async function pendingReward() {
        await pumpkin.methods.totalRewardPending(ethAddress).call().then(r => {
          document.getElementById('leftTokens').innerHTML = Number(web3.utils.fromWei(r)).toFixed(3);
        });
}


async function stakegold() {
	var goldinput = document.getElementById("toStake");
	var amount = await goldinput.value;
	await pumpkin.methods.stakeGold(web3.utils.toWei(amount)).send( {from: web3.givenProvider.selectedAddress, gas: 200000}).on('receipt', function(receipt) {
		console.log(receipt);
	});
}

async function stakesilver() {
	var silverinput = document.getElementById("toStake");
	var amount = await silverinput.value;
	await pumpkin.methods.stakeSilver(web3.utils.toWei(amount)).send( {from: web3.givenProvider.selectedAddress, gas: 200000}).on('receipt', function(receipt) {
		console.log(receipt);
	});
}

async function stakebronze() {
	var bronzeinput = document.getElementById("toStake");
	var amount = await bronzeinput.value.toString();
	await pumpkin.methods.stakeBronze(web3.utils.toWei(amount)).send( {from: web3.givenProvider.selectedAddress, gas: 200000}).on('receipt', function(receipt) {
		console.log(receipt);
	});
}

async function unstakegold() {
	var goldinput = document.getElementById("toStake");
	var amount = await goldinput.value;
	await pumpkin.methods.withdrawGold(web3.utils.toWei(amount)).send( {from: web3.givenProvider.selectedAddress, gas: 200000}).on('receipt', function(receipt) {
		console.log(receipt);
	});
}

async function unstakesilver() {
	var silverinput = document.getElementById("toStake");
	var amount = await silverinput.value;
	await pumpkin.methods.withdrawSilver(web3.utils.toWei(amount)).send( {from: web3.givenProvider.selectedAddress, gas: 200000}).on('receipt', function(receipt) {
		console.log(receipt);
	});
}

async function unstakebronze() {
	var bronzeinput = document.getElementById("toStake");
	var amount = await bronzeinput.value;
	await pumpkin.methods.withdrawBronze(web3.utils.toWei(amount)).send( {from: web3.givenProvider.selectedAddress, gas: 200000}).on('receipt', function(receipt) {
		console.log(receipt);
	});
}

async function getBalanceHalloween(address) {
	await halloweenInstance.methods.balanceOf(address).call().then(r => {
		document.getElementById("bnbBalance").innerHTML = Number(web3.utils.fromWei(r)).toFixed(2);
		document.getElementById("bnbBalance2").innerHTML = Number(web3.utils.fromWei(r)).toFixed(2);
	});
}


async function getBalancePumpkin(address) {
	await pumpkinInstance.methods.balanceOf(address).call().then(r => {
		document.getElementById("pumpkinBalance").innerHTML = Number(web3.utils.fromWei(r)).toFixed(2);
	});
}


async function getBalanceGold() {
	await gold.methods.balanceOf(ethAddress).call().then(r => {
		document.getElementById("rightTokens").innerHTML = Number(web3.utils.fromWei(r)).toFixed(7);
	});
}

async function getBalanceGold2() {
	await gold.methods.balanceOf(ethAddress).call().then(r => {
		document.getElementById("balanceorstaked").innerHTML = Number(web3.utils.fromWei(r)).toFixed(7);
	});
}


async function getBalanceSilver() {
	await silver.methods.balanceOf(ethAddress).call().then(r => {
		document.getElementById("rightTokens").innerHTML = Number(web3.utils.fromWei(r)).toFixed(7);
	});
}

async function getBalanceSilver2() {
	await silver.methods.balanceOf(ethAddress).call().then(r => {
		document.getElementById("balanceorstaked").innerHTML = Number(web3.utils.fromWei(r)).toFixed(7);
	});
}



async function getBalanceBronze() {
	await bronze.methods.balanceOf(ethAddress).call().then(r => {
		document.getElementById("rightTokens").innerHTML = Number(web3.utils.fromWei(r)).toFixed(7);
	});
}

async function getBalanceBronze2() {
	await bronze.methods.balanceOf(ethAddress).call().then(r => {
		document.getElementById("balanceorstaked").innerHTML = Number(web3.utils.fromWei(r)).toFixed(7);
	});
}



async function getTotalSupplyHalloween() {
	await halloweenInstance.methods.totalSupply().call().then(r => {
		document.getElementById('totalHallSupply').innerHTML = Number(web3.utils.fromWei(r)).toFixed(2);
	});
}

async function getTotalSupplyPumpkin() {
	await pumpkinInstance.methods.totalSupply().call().then(r => {
		document.getElementById('pumpkinTotalSupply').innerHTML = Number(web3.utils.fromWei(r)).toFixed(2);
	});
}

async function isGoldApproved() {
    let _goldAllowance = await gold.methods.allowance(ethAddress, pumpkinAddress).call();
    let appDiv = document.getElementById("approveDiv");
    if (Number(_goldAllowance) > 0) {
        appDiv.hidden = true;
        appDiv.removeAttribute("style");
    }
}


async function isSilverApproved() {
    let _silverAllowance = await silver.methods.allowance(ethAddress, pumpkinAddress).call();
    let appDiv = document.getElementById("approveDiv");
    if (Number(_silverAllowance) > 0) {
        appDiv.hidden = true;
        appDiv.removeAttribute("style");
    }
}

async function isBronzeApproved() {
    let _bronzeAllowance = await bronze.methods.allowance(ethAddress, pumpkinAddress).call();
    let appDiv = document.getElementById("approveDiv");
    if (Number(_bronzeAllowance) > 0) {
        appDiv.hidden = true;
        appDiv.removeAttribute("style");
    }
}






async function startWeb3() {
    await window.ethereum.enable();
    getGoldRoi();
    getBalanceHalloween(ethereum.selectedAddress);
    getBalancePumpkin(ethereum.selectedAddress);
    getTotalSupplyHalloween();
    getTotalSupplyPumpkin();
    getGoldRoi();
    getSilverRoi();
    getBronzeRoi();
    console.log("gold roi loaded");
    var accounts = await web3.eth.getAccounts();
    ethAddress = accounts[0];
    var ethField = document.getElementsByClassName("address")[0].innerHTML = ethAddress;

    var goldinput = document.getElementById('toStake');
    var silverinput = document.getElementById('toStake');
    var bronzeinput = document.getElementById('toStake');
    var trickinput = document.getElementById('toStake');
    var treatinput = document.getElementById('toStake');

    var approveGold = document.getElementById('approve-gold');
    approveGold.addEventListener("click", approvegold);

    var approveSilver = document.getElementById('approve-silver');
    approveSilver.addEventListener("click", approvesilver);

    var approveBronze = document.getElementById('approve-bronze');
    approveBronze.addEventListener("click", approvebronze);

    var stakeGold = document.getElementById('stake-gold');
    stakeGold.addEventListener("click", stakegold);

    var stakeSilver = document.getElementById('stake-silver');
    stakeSilver.addEventListener("click", stakesilver);

    var stakeBronze = document.getElementById('stake-bronze');
    stakeBronze.addEventListener("click", stakebronze);

    var getPumpkinReward = document.getElementById('claim-pumpkin');
    getPumpkinReward.addEventListener("click", claimpumpkin);

    var getPumpkindividend = document.getElementById('get-pumpkin');
    getPumpkindividend.addEventListener("click", getpumpkin);

    var approveButtonUNI = document.getElementById('approve_button_uni');
    approveButtonUNI.addEventListener("click", approveuni);
		                

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
