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
import {ApiClient} from '../ApiClient';

/**
 * The OrderBookData model module.
 * @module model/OrderBookData
 * @version v2
 */
export class OrderBookData {
  /**
   * Constructs a new <code>OrderBookData</code>.
   * Response data for order Book
   * @alias module:model/OrderBookData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OrderBookData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderBookData} obj Optional instance to populate.
   * @return {module:model/OrderBookData} The populated <code>OrderBookData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrderBookData();
      if (data.hasOwnProperty('exchange'))
        obj.exchange = ApiClient.convertToType(data['exchange'], 'String');
      if (data.hasOwnProperty('product'))
        obj.product = ApiClient.convertToType(data['product'], 'String');
      if (data.hasOwnProperty('price'))
        obj.price = ApiClient.convertToType(data['price'], 'Number');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('guid'))
        obj.guid = ApiClient.convertToType(data['guid'], 'String');
      if (data.hasOwnProperty('tag'))
        obj.tag = ApiClient.convertToType(data['tag'], 'String');
      if (data.hasOwnProperty('instrument_token'))
        obj.instrumentToken = ApiClient.convertToType(data['instrument_token'], 'String');
      if (data.hasOwnProperty('placed_by'))
        obj.placedBy = ApiClient.convertToType(data['placed_by'], 'String');
      if (data.hasOwnProperty('tradingsymbol'))
        obj.tradingsymbol = ApiClient.convertToType(data['tradingsymbol'], 'String');
      if (data.hasOwnProperty('order_type'))
        obj.orderType = ApiClient.convertToType(data['order_type'], 'String');
      if (data.hasOwnProperty('validity'))
        obj.validity = ApiClient.convertToType(data['validity'], 'String');
      if (data.hasOwnProperty('trigger_price'))
        obj.triggerPrice = ApiClient.convertToType(data['trigger_price'], 'Number');
      if (data.hasOwnProperty('disclosed_quantity'))
        obj.disclosedQuantity = ApiClient.convertToType(data['disclosed_quantity'], 'Number');
      if (data.hasOwnProperty('transaction_type'))
        obj.transactionType = ApiClient.convertToType(data['transaction_type'], 'String');
      if (data.hasOwnProperty('average_price'))
        obj.averagePrice = ApiClient.convertToType(data['average_price'], 'Number');
      if (data.hasOwnProperty('filled_quantity'))
        obj.filledQuantity = ApiClient.convertToType(data['filled_quantity'], 'Number');
      if (data.hasOwnProperty('pending_quantity'))
        obj.pendingQuantity = ApiClient.convertToType(data['pending_quantity'], 'Number');
      if (data.hasOwnProperty('status_message'))
        obj.statusMessage = ApiClient.convertToType(data['status_message'], 'String');
      if (data.hasOwnProperty('status_message_raw'))
        obj.statusMessageRaw = ApiClient.convertToType(data['status_message_raw'], 'String');
      if (data.hasOwnProperty('exchange_order_id'))
        obj.exchangeOrderId = ApiClient.convertToType(data['exchange_order_id'], 'String');
      if (data.hasOwnProperty('parent_order_id'))
        obj.parentOrderId = ApiClient.convertToType(data['parent_order_id'], 'String');
      if (data.hasOwnProperty('order_id'))
        obj.orderId = ApiClient.convertToType(data['order_id'], 'String');
      if (data.hasOwnProperty('variety'))
        obj.variety = ApiClient.convertToType(data['variety'], 'String');
      if (data.hasOwnProperty('order_timestamp'))
        obj.orderTimestamp = ApiClient.convertToType(data['order_timestamp'], 'String');
      if (data.hasOwnProperty('exchange_timestamp'))
        obj.exchangeTimestamp = ApiClient.convertToType(data['exchange_timestamp'], 'String');
      if (data.hasOwnProperty('is_amo'))
        obj.isAmo = ApiClient.convertToType(data['is_amo'], 'Boolean');
      if (data.hasOwnProperty('order_request_id'))
        obj.orderRequestId = ApiClient.convertToType(data['order_request_id'], 'String');
      if (data.hasOwnProperty('order_ref_id'))
        obj.orderRefId = ApiClient.convertToType(data['order_ref_id'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>exchange</code> property.
 * @enum {String}
 * @readonly
 */
OrderBookData.ExchangeEnum = {
  /**
   * value: "NSE"
   * @const
   */
  NSE: "NSE",

  /**
   * value: "NFO"
   * @const
   */
  NFO: "NFO",

  /**
   * value: "CDS"
   * @const
   */
  CDS: "CDS",

  /**
   * value: "BSE"
   * @const
   */
  BSE: "BSE",

  /**
   * value: "BCD"
   * @const
   */
  BCD: "BCD",

  /**
   * value: "MCX"
   * @const
   */
  MCX: "MCX"
};
/**
 * Exchange to which the order is associated
 * @member {module:model/OrderBookData.ExchangeEnum} exchange
 */
OrderBookData.prototype.exchange = undefined;

/**
 * Allowed values for the <code>product</code> property.
 * @enum {String}
 * @readonly
 */
OrderBookData.ProductEnum = {
  /**
   * value: "I"
   * @const
   */
  I: "I",

  /**
   * value: "D"
   * @const
   */
  D: "D",

  /**
   * value: "CO"
   * @const
   */
  CO: "CO",

  /**
   * value: "OCO"
   * @const
   */
  OCO: "OCO",

  /**
   * value: "MTF"
   * @const
   */
  MTF: "MTF"
};
/**
 * Shows if the order was either Intraday, Delivery, CoverOrder or OneCancelsOther
 * @member {module:model/OrderBookData.ProductEnum} product
 */
OrderBookData.prototype.product = undefined;

/**
 * Price at which the order was placed
 * @member {Number} price
 */
OrderBookData.prototype.price = undefined;

/**
 * Quantity with which the order was placed
 * @member {Number} quantity
 */
OrderBookData.prototype.quantity = undefined;

/**
 * Indicates the current status of the order. Valid order status’ are outlined in the table below
 * @member {String} status
 */
OrderBookData.prototype.status = undefined;

/**
 * @member {String} guid
 */
OrderBookData.prototype.guid = undefined;

/**
 * Tag to uniquely identify an order
 * @member {String} tag
 */
OrderBookData.prototype.tag = undefined;

/**
 * Identifier issued by Upstox used for subscribing to live market quotes
 * @member {String} instrumentToken
 */
OrderBookData.prototype.instrumentToken = undefined;

/**
 * Uniquely identifies the user
 * @member {String} placedBy
 */
OrderBookData.prototype.placedBy = undefined;

/**
 * Shows the trading symbol of the instrument
 * @member {String} tradingsymbol
 */
OrderBookData.prototype.tradingsymbol = undefined;

/**
 * Allowed values for the <code>orderType</code> property.
 * @enum {String}
 * @readonly
 */
OrderBookData.OrderTypeEnum = {
  /**
   * value: "MARKET"
   * @const
   */
  MARKET: "MARKET",

  /**
   * value: "LIMIT"
   * @const
   */
  LIMIT: "LIMIT",

  /**
   * value: "SL"
   * @const
   */
  SL: "SL",

  /**
   * value: "SL-M"
   * @const
   */
  SL_M: "SL-M"
};
/**
 * Type of order. It can be one of the following MARKET refers to market order<br>LIMIT refers to Limit Order<br>SL refers to Stop Loss Limit<br>SL-M refers to Stop loss market
 * @member {module:model/OrderBookData.OrderTypeEnum} orderType
 */
OrderBookData.prototype.orderType = undefined;

/**
 * Allowed values for the <code>validity</code> property.
 * @enum {String}
 * @readonly
 */
OrderBookData.ValidityEnum = {
  /**
   * value: "DAY"
   * @const
   */
  DAY: "DAY",

  /**
   * value: "IOC"
   * @const
   */
  IOC: "IOC"
};
/**
 * Order validity (DAY- Day and IOC- Immediate or Cancel (IOC) order)
 * @member {module:model/OrderBookData.ValidityEnum} validity
 */
OrderBookData.prototype.validity = undefined;

/**
 * If the order was a stop loss order then the trigger price set is mentioned here
 * @member {Number} triggerPrice
 */
OrderBookData.prototype.triggerPrice = undefined;

/**
 * The quantity that should be disclosed in the market depth
 * @member {Number} disclosedQuantity
 */
OrderBookData.prototype.disclosedQuantity = undefined;

/**
 * Allowed values for the <code>transactionType</code> property.
 * @enum {String}
 * @readonly
 */
OrderBookData.TransactionTypeEnum = {
  /**
   * value: "BUY"
   * @const
   */
  BUY: "BUY",

  /**
   * value: "SELL"
   * @const
   */
  SELL: "SELL"
};
/**
 * Indicates whether the order was a buy or sell order
 * @member {module:model/OrderBookData.TransactionTypeEnum} transactionType
 */
OrderBookData.prototype.transactionType = undefined;

/**
 * Average price at which the qty got traded
 * @member {Number} averagePrice
 */
OrderBookData.prototype.averagePrice = undefined;

/**
 * The total quantity traded from this particular order
 * @member {Number} filledQuantity
 */
OrderBookData.prototype.filledQuantity = undefined;

/**
 * Pending quantity to be filled
 * @member {Number} pendingQuantity
 */
OrderBookData.prototype.pendingQuantity = undefined;

/**
 * Indicates the reason when any order is rejected, not modified or cancelled
 * @member {String} statusMessage
 */
OrderBookData.prototype.statusMessage = undefined;

/**
 * Description of the order's status as received from RMS
 * @member {String} statusMessageRaw
 */
OrderBookData.prototype.statusMessageRaw = undefined;

/**
 * Unique order ID assigned by the exchange for the order placed
 * @member {String} exchangeOrderId
 */
OrderBookData.prototype.exchangeOrderId = undefined;

/**
 * In case the order is part of the second or third leg of a CO or OCO, the parent order ID is indicated here
 * @member {String} parentOrderId
 */
OrderBookData.prototype.parentOrderId = undefined;

/**
 * Unique order ID assigned internally for the order placed
 * @member {String} orderId
 */
OrderBookData.prototype.orderId = undefined;

/**
 * Order complexity
 * @member {String} variety
 */
OrderBookData.prototype.variety = undefined;

/**
 * User readable timestamp at which the order was placed
 * @member {String} orderTimestamp
 */
OrderBookData.prototype.orderTimestamp = undefined;

/**
 * User readable time at which the order was placed or updated
 * @member {String} exchangeTimestamp
 */
OrderBookData.prototype.exchangeTimestamp = undefined;

/**
 * Signifies if the order is an After Market Order
 * @member {Boolean} isAmo
 */
OrderBookData.prototype.isAmo = undefined;

/**
 * Apart from 1st order it shows the count of how many requests were sent
 * @member {String} orderRequestId
 */
OrderBookData.prototype.orderRequestId = undefined;

/**
 * The order reference ID for which the order must be modified
 * @member {String} orderRefId
 */
OrderBookData.prototype.orderRefId = undefined;

