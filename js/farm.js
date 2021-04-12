'use strict';

(function($){
    // Truncate wallet address on header
    try {
        let headerAddressContainer = $('#farm .header .wallet_connect .inner .address');
        let headerAddress = $('#farm .header .wallet_connect .inner .address').html().trim();
        headerAddressContainer.html(headerAddress.slice(0,8)+"..."+headerAddress.slice(-4));
        headerAddressContainer.show();
    }catch (e) {}

    // Countdown
    try {
        $('[data-countdown]').each(function() {
            var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('%D:%H:%M:%S'));
            }).on('finish.countdown', function() {
                $(this).html('Closed');
            });
        });
    }catch (e) {}
 let activeFarmGlobal = "";
    // Show farm content and hide farm list
    try {
        $(".max").on("click", function(){
          let maxVal = $("#balanceorstaked").html()
          $("#toStake").val(maxVal);
        }
        );
        $( ".farm_info button" ).on( "click", function() {
            let activeFarm = $( this ).attr('data-farm');
            activeFarmGlobal = activeFarm;
            let activeFarmImage = $( this ).parent().parent().find('.logo').find('img').attr('src');
            let activeFarmStakedLabel = "-";
            // Hide farm list
            $('.farm_info').hide();
            
            activeFarmStakedLabel = 'BNB Staked in '+activeFarm;
            
            if(activeFarm == "GOLD"){
              $('.button .button_50.confirm').attr('onClick', 'stakegold()');
		console.log("done");
            }
            if(activeFarm == "SILVER"){
              $('.button .button_50.confirm').attr('onClick', 'stakesilver()');
            }
            if(activeFarm == "BRONZE"){
              $('.button .button_50.confirm').attr('onClick', 'stakebronze()');
            }
            // Set coun on selected farm div
            $('.selected_farm').attr('data-farm',activeFarm);
            $('.selected_farm .staked .label').html(activeFarmStakedLabel);
            // Set selected farm token
            $('.selected_farm .staked .logo img').attr('src',activeFarmImage);
            // Show selected farm tab
            
            $('#lftButton').attr('onClick', 'claimHalloweenRewards()');
            
            if(activeFarm == "GOLD"){
              stakedGold();
            }
            if(activeFarm == "SILVER"){
              stakedSilver();
              isGoldApproved();
              console.log("done");
            }
            if(activeFarm == "BRONZE"){
              stakedBronze();
              console.log("done");
            }
            pendingReward();
            console.log("finished rendering");
            $('.selected_farm').show();
            /*if(activeFarm == "GOLD"){ 
              let tempVar = document.getElementById("approveDiv");
              tempVar.removeAttribute("style");
              tempVar.hidden = true;
            }*/

        });
    }catch (e) {}

    // Stake popup
    let activeFarmPopupHeader = "";
    let activeFarmPopup = "";
    try {
        $( ".selected_farm .staked .stake" ).on( "click", function() {
            activeFarmPopup = $('.selected_farm').attr('data-farm');
            // Check if normal token or LP
            if(activeFarmPopup.includes("_")){
                activeFarmPopupHeader = activeFarmPopup.split('_')[0]+"/"+activeFarmPopup.split('_')[1];
            }else{
                activeFarmPopupHeader = activeFarmPopup;
            }
            // Set popup header
            $('.popup .header').html('Deposit BNB in '+activeFarmPopupHeader+"");
            // Show popup
            $('.popup .token_name').html('BNB');
            // Show popup
            if(activeFarmGlobal == "GOLD"){
              $('.button .button_50.confirm').attr('onClick', 'stakegold()');
              getBalanceGold2();
            }
            if(activeFarmGlobal == "STAKE_SIVLER"){
              $('.button .button_50.confirm').attr('onClick', 'stakesilver()');
              getBalanceSilver2();
            }
            if(activeFarmGlobal == "BRONZE"){
              $('.button .button_50.confirm').attr('onClick', 'stakebronze()');
              getBalanceBronze2();
            }

            $('.popup').show();
        });
    }catch (e) {}
    // Unstake popup
    try {
        $( ".selected_farm .staked .unstake" ).on( "click", function() {
            activeFarmPopup = $('.selected_farm').attr('data-farm');
            // Check if normal token or LP
            
                activeFarmPopupHeader = activeFarmPopup;
            
            // Set popup header
            $('.popup .header').html('Unstake BNB from '+activeFarmPopupHeader+"");
            // Show popup
            $('.popup .token_name').html('BNB');
            // Show popup
            if(activeFarmGlobal == "GOLD"){
              $('.button .button_50.confirm').attr('onClick', 'unstakegold()');
              stakedGold();
              console.log("done");
            }
            if(activeFarmGlobal == "SILVER"){
              $('.button .button_50.confirm').attr('onClick', 'unstakesilver()');
              stakedSilver();
            }
            if(activeFarmGlobal == "BRONZE"){
              $('.button .button_50.confirm').attr('onClick', 'unstakebronze()');
              stakedBronze();
            }

            $('.popup').show();
        });
    }catch (e) {}
    // Close popup
    try {
        $( ".popup .cancel" ).on( "click", function() {
            $('.popup').hide();
        });
    }catch (e) {}

})(window.jQuery || null);
