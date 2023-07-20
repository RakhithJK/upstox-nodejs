/*
 * Upstox Developer API
 * Build your App on the Upstox platform  ![Banner](https://api-v2.upstox.com/api-docs/images/banner.jpg \"banner\")  # Introduction  Upstox API is a set of rest APIs that provide data required to build a complete investment and trading platform. Execute orders in real time, manage user portfolio, stream live market data (using Websocket), and more, with the easy to understand API collection.  All requests are over HTTPS and the requests are sent with the content-type ‘application/json’. Developers have the option of choosing the response type as JSON or CSV for a few API calls.  To be able to use these APIs you need to create an App in the Developer Console and generate your **apiKey** and **apiSecret**. You can use a redirect URL which will be called after the login flow.  If you are a **trader**, you can directly create apps from Upstox mobile app or the desktop platform itself from **Apps** sections inside the **Account** Tab. Head over to <a href=\"http://account.upstox.com/developer/apps\" target=\"_blank\">account.upstox.com/developer/apps</a>.</br> If you are a **business** looking to integrate Upstox APIs, reach out to us and we will get a custom app created for you in no time.  It is highly recommended that you do not embed the **apiSecret** in your frontend app. Create a remote backend which does the handshake on behalf of the frontend app. Marking the apiSecret in the frontend app will make your app vulnerable to threats and potential issues. 
 *
 * OpenAPI spec version: v2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.UpstoxClient);
  }
}(this, function(expect, UpstoxClient) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('PositionData', function() {
      beforeEach(function() {
        instance = new UpstoxClient.PositionData();
      });

      it('should create an instance of PositionData', function() {
        // TODO: update the code to test PositionData
        expect(instance).to.be.a(UpstoxClient.PositionData);
      });

      it('should have the property exchange (base name: "exchange")', function() {
        // TODO: update the code to test the property exchange
        expect(instance).to.have.property('exchange');
        // expect(instance.exchange).to.be(expectedValueLiteral);
      });

      it('should have the property multiplier (base name: "multiplier")', function() {
        // TODO: update the code to test the property multiplier
        expect(instance).to.have.property('multiplier');
        // expect(instance.multiplier).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

      it('should have the property pnl (base name: "pnl")', function() {
        // TODO: update the code to test the property pnl
        expect(instance).to.have.property('pnl');
        // expect(instance.pnl).to.be(expectedValueLiteral);
      });

      it('should have the property product (base name: "product")', function() {
        // TODO: update the code to test the property product
        expect(instance).to.have.property('product');
        // expect(instance.product).to.be(expectedValueLiteral);
      });

      it('should have the property instrumentToken (base name: "instrument_token")', function() {
        // TODO: update the code to test the property instrumentToken
        expect(instance).to.have.property('instrumentToken');
        // expect(instance.instrumentToken).to.be(expectedValueLiteral);
      });

      it('should have the property averagePrice (base name: "average_price")', function() {
        // TODO: update the code to test the property averagePrice
        expect(instance).to.have.property('averagePrice');
        // expect(instance.averagePrice).to.be(expectedValueLiteral);
      });

      it('should have the property buyValue (base name: "buy_value")', function() {
        // TODO: update the code to test the property buyValue
        expect(instance).to.have.property('buyValue');
        // expect(instance.buyValue).to.be(expectedValueLiteral);
      });

      it('should have the property overnightQuantity (base name: "overnight_quantity")', function() {
        // TODO: update the code to test the property overnightQuantity
        expect(instance).to.have.property('overnightQuantity');
        // expect(instance.overnightQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property dayBuyValue (base name: "day_buy_value")', function() {
        // TODO: update the code to test the property dayBuyValue
        expect(instance).to.have.property('dayBuyValue');
        // expect(instance.dayBuyValue).to.be(expectedValueLiteral);
      });

      it('should have the property dayBuyPrice (base name: "day_buy_price")', function() {
        // TODO: update the code to test the property dayBuyPrice
        expect(instance).to.have.property('dayBuyPrice');
        // expect(instance.dayBuyPrice).to.be(expectedValueLiteral);
      });

      it('should have the property overnightBuyAmount (base name: "overnight_buy_amount")', function() {
        // TODO: update the code to test the property overnightBuyAmount
        expect(instance).to.have.property('overnightBuyAmount');
        // expect(instance.overnightBuyAmount).to.be(expectedValueLiteral);
      });

      it('should have the property overnightBuyQuantity (base name: "overnight_buy_quantity")', function() {
        // TODO: update the code to test the property overnightBuyQuantity
        expect(instance).to.have.property('overnightBuyQuantity');
        // expect(instance.overnightBuyQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property dayBuyQuantity (base name: "day_buy_quantity")', function() {
        // TODO: update the code to test the property dayBuyQuantity
        expect(instance).to.have.property('dayBuyQuantity');
        // expect(instance.dayBuyQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property daySellValue (base name: "day_sell_value")', function() {
        // TODO: update the code to test the property daySellValue
        expect(instance).to.have.property('daySellValue');
        // expect(instance.daySellValue).to.be(expectedValueLiteral);
      });

      it('should have the property daySellPrice (base name: "day_sell_price")', function() {
        // TODO: update the code to test the property daySellPrice
        expect(instance).to.have.property('daySellPrice');
        // expect(instance.daySellPrice).to.be(expectedValueLiteral);
      });

      it('should have the property overnightSellAmount (base name: "overnight_sell_amount")', function() {
        // TODO: update the code to test the property overnightSellAmount
        expect(instance).to.have.property('overnightSellAmount');
        // expect(instance.overnightSellAmount).to.be(expectedValueLiteral);
      });

      it('should have the property overnightSellQuantity (base name: "overnight_sell_quantity")', function() {
        // TODO: update the code to test the property overnightSellQuantity
        expect(instance).to.have.property('overnightSellQuantity');
        // expect(instance.overnightSellQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property daySellQuantity (base name: "day_sell_quantity")', function() {
        // TODO: update the code to test the property daySellQuantity
        expect(instance).to.have.property('daySellQuantity');
        // expect(instance.daySellQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property quantity (base name: "quantity")', function() {
        // TODO: update the code to test the property quantity
        expect(instance).to.have.property('quantity');
        // expect(instance.quantity).to.be(expectedValueLiteral);
      });

      it('should have the property lastPrice (base name: "last_price")', function() {
        // TODO: update the code to test the property lastPrice
        expect(instance).to.have.property('lastPrice');
        // expect(instance.lastPrice).to.be(expectedValueLiteral);
      });

      it('should have the property unrealised (base name: "unrealised")', function() {
        // TODO: update the code to test the property unrealised
        expect(instance).to.have.property('unrealised');
        // expect(instance.unrealised).to.be(expectedValueLiteral);
      });

      it('should have the property realised (base name: "realised")', function() {
        // TODO: update the code to test the property realised
        expect(instance).to.have.property('realised');
        // expect(instance.realised).to.be(expectedValueLiteral);
      });

      it('should have the property sellValue (base name: "sell_value")', function() {
        // TODO: update the code to test the property sellValue
        expect(instance).to.have.property('sellValue');
        // expect(instance.sellValue).to.be(expectedValueLiteral);
      });

      it('should have the property tradingsymbol (base name: "tradingsymbol")', function() {
        // TODO: update the code to test the property tradingsymbol
        expect(instance).to.have.property('tradingsymbol');
        // expect(instance.tradingsymbol).to.be(expectedValueLiteral);
      });

      it('should have the property closePrice (base name: "close_price")', function() {
        // TODO: update the code to test the property closePrice
        expect(instance).to.have.property('closePrice');
        // expect(instance.closePrice).to.be(expectedValueLiteral);
      });

      it('should have the property buyPrice (base name: "buy_price")', function() {
        // TODO: update the code to test the property buyPrice
        expect(instance).to.have.property('buyPrice');
        // expect(instance.buyPrice).to.be(expectedValueLiteral);
      });

      it('should have the property sellPrice (base name: "sell_price")', function() {
        // TODO: update the code to test the property sellPrice
        expect(instance).to.have.property('sellPrice');
        // expect(instance.sellPrice).to.be(expectedValueLiteral);
      });

    });
  });

}));
