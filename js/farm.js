'use strict';

(function($){
    // Truncate wallet address on header
    try {
        let headerAddressContainer = $('#farm .header .wallet_connect .inner .address');
        let headerAddress = $('#farm .header .wallet_connect .inner .address').html().trim();
        headerAddressContainer.html(headerAddress.slice(0,8)+"..."+headerAddress.slice(-4));
        headerAddressContainer.show();
    }catch (e) {}




})(window.jQuery || null);
