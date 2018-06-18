import formatItem from '../utils/formatItem'

const objects = {
	"Coredna\\Cart3\\Cart3View": [
		{
			"name": "__construct",
			"doc": "/**\n     * @param \\Cart3 $cart3\n     * @param \\Cart3Converter $cart3converter\n     */",
			"params": "cart3, cart3converter",
			"fn": "\nCart3View.prototype.__construct = function(cart3, cart3converter) { return `/**\n     * @param \\Cart3 $cart3\n     * @param \\Cart3Converter $cart3converter\n     */`; };"
		},
		{
			"name": "getKey",
			"doc": "/**\n     * Get unique cart3 identifier\n     * @return mixed\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getKey = function() { return `/**\n     * Get unique cart3 identifier\n     * @return mixed\n     */`; };"
		},
		{
			"name": "getMerchantId",
			"doc": "/**\n     * @return mixed\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getMerchantId = function() { return `/**\n     * @return mixed\n     */`; };"
		},
		{
			"name": "getCentreId",
			"doc": "/**\n     * @return mixed\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getCentreId = function() { return `/**\n     * @return mixed\n     */`; };"
		},
		{
			"name": "getUserId",
			"doc": "/**\n     * @return mixed\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getUserId = function() { return `/**\n     * @return mixed\n     */`; };"
		},
		{
			"name": "getItems",
			"doc": "/**\n     * Get all (CartItems) items\n     * @return mixed\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getItems = function() { return `/**\n     * Get all (CartItems) items\n     * @return mixed\n     */`; };"
		},
		{
			"name": "getDefaultTax",
			"doc": "/**\n     * This is the default tax set in the DXP config. i.e: 10%\n     * @return mixed\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getDefaultTax = function() { return `/**\n     * This is the default tax set in the DXP config. i.e: 10%\n     * @return mixed\n     */`; };"
		},
		{
			"name": "contains",
			"doc": "/**\n     * Check if an item is already in the cart\n     * @param CartItem $cartItem\n     * @return bool\n     */",
			"params": "cartItem",
			"fn": "\nCart3View.prototype.contains = function(cartItem) { return `/**\n     * Check if an item is already in the cart\n     * @param CartItem $cartItem\n     * @return bool\n     */`; };"
		},
		{
			"name": "isTaxInclusive",
			"doc": "/**\n     * @return boolean\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.isTaxInclusive = function() { return `/**\n     * @return boolean\n     */`; };"
		},
		{
			"name": "getSubTotal",
			"doc": "/**\n     * Get cart subtotal\n     * @return float\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getSubTotal = function() { return `/**\n     * Get cart subtotal\n     * @return float\n     */`; };"
		},
		{
			"name": "describe",
			"doc": "/**\n     * Function which returns a short summary of the cart contents\n     * @return null|string\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.describe = function() { return `/**\n     * Function which returns a short summary of the cart contents\n     * @return null|string\n     */`; };"
		},
		{
			"name": "getTax",
			"doc": "/**\n     * Get tax price\n     * @return float\n     * @throws \\Exception\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getTax = function() { return `/**\n     * Get tax price\n     * @return float\n     * @throws \\Exception\n     */`; };"
		},
		{
			"name": "getSurcharge",
			"doc": "/**\n     * Surcharge price\n     * @return float\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getSurcharge = function() { return `/**\n     * Surcharge price\n     * @return float\n     */`; };"
		},
		{
			"name": "getDiscountTotal",
			"doc": "/**\n     * Discount price\n     * @return float\n     * @throws \\Exception\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getDiscountTotal = function() { return `/**\n     * Discount price\n     * @return float\n     * @throws \\Exception\n     */`; };"
		},
		{
			"name": "getShippingTotal",
			"doc": "/**\n     * Shipping price\n     * @return float\n     * @throws \\Exception\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getShippingTotal = function() { return `/**\n     * Shipping price\n     * @return float\n     * @throws \\Exception\n     */`; };"
		},
		{
			"name": "getTotal",
			"doc": "/**\n     * Return the final price of this cart\n     * @return float price\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getTotal = function() { return `/**\n     * Return the final price of this cart\n     * @return float price\n     */`; };"
		},
		{
			"name": "getTotalWithoutDiscount",
			"doc": "/**\n     * Cart price without discount\n     * @return float\n     * @throws \\Exception\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getTotalWithoutDiscount = function() { return `/**\n     * Cart price without discount\n     * @return float\n     * @throws \\Exception\n     */`; };"
		},
		{
			"name": "countItems",
			"doc": "/**\n     * Count everything (CartItems) in the cart, sum(cart.item.quantity)\n     * @return integer\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.countItems = function() { return `/**\n     * Count everything (CartItems) in the cart, sum(cart.item.quantity)\n     * @return integer\n     */`; };"
		},
		{
			"name": "countProducts",
			"doc": "/**\n     * Count all the CartItems:Products, sum(product.quantity)\n     * @return integer\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.countProducts = function() { return `/**\n     * Count all the CartItems:Products, sum(product.quantity)\n     * @return integer\n     */`; };"
		},
		{
			"name": "countBundles",
			"doc": "/**\n     * Count all the CartItems:Bundles, sum(bundle.quantity)\n     * @return integer\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.countBundles = function() { return `/**\n     * Count all the CartItems:Bundles, sum(bundle.quantity)\n     * @return integer\n     */`; };"
		},
		{
			"name": "getProductIds",
			"doc": "/**\n     * Get ids from product CartItems\n     * @return array\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getProductIds = function() { return `/**\n     * Get ids from product CartItems\n     * @return array\n     */`; };"
		},
		{
			"name": "getBundleIds",
			"doc": "/**\n     * Get ids from bundle CartItems\n     * @return array\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getBundleIds = function() { return `/**\n     * Get ids from bundle CartItems\n     * @return array\n     */`; };"
		},
		{
			"name": "getProducts",
			"doc": "/**\n     * Get array of CatProduct in cart\n     * ['id', 'name', 'quantity', 'final_price', 'object' => CatProduct, 'options' => $options]\n     * @return array\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getProducts = function() { return `/**\n     * Get array of CatProduct in cart\n     * ['id', 'name', 'quantity', 'final_price', 'object' => CatProduct, 'options' => $options]\n     * @return array\n     */`; };"
		},
		{
			"name": "getBundles",
			"doc": "/**\n     * Get array of Bundle in cart\n     * @return array\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getBundles = function() { return `/**\n     * Get array of Bundle in cart\n     * @return array\n     */`; };"
		},
		{
			"name": "getBundleById",
			"doc": "/**\n     * Get one Bundle in cart\n     * @return array\n     */",
			"params": "bundleId",
			"fn": "\nCart3View.prototype.getBundleById = function(bundleId) { return `/**\n     * Get one Bundle in cart\n     * @return array\n     */`; };"
		},
		{
			"name": "getVoucherCode",
			"doc": "/**\n     * Return Voucher Code loaded, if any\n     *\n     * @return mixed\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getVoucherCode = function() { return `/**\n     * Return Voucher Code loaded, if any\n     *\n     * @return mixed\n     */`; };"
		},
		{
			"name": "getQuantity",
			"doc": false,
			"params": "",
			"fn": "\nCart3View.prototype.getQuantity = function() { return ``; };"
		},
		{
			"name": "getVoucher",
			"doc": "/**\n     * Get the Voucher object if any used\n     *\n     * @return bool\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getVoucher = function() { return `/**\n     * Get the Voucher object if any used\n     *\n     * @return bool\n     */`; };"
		},
		{
			"name": "getVoucherTotal",
			"doc": "/**\n     * Get the total voucher amount discounted\n     *\n     * @return mixed\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getVoucherTotal = function() { return `/**\n     * Get the total voucher amount discounted\n     *\n     * @return mixed\n     */`; };"
		},
		{
			"name": "describeDiscounts",
			"doc": "/**\n     * @return array\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.describeDiscounts = function() { return `/**\n     * @return array\n     */`; };"
		},
		{
			"name": "suggestDiscounts",
			"doc": "/**\n     * @return array\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.suggestDiscounts = function() { return `/**\n     * @return array\n     */`; };"
		},
		{
			"name": "areQuoteDiscountsInEffect",
			"doc": "/**\n     * @return mixed\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.areQuoteDiscountsInEffect = function() { return `/**\n     * @return mixed\n     */`; };"
		},
		{
			"name": "getQuoteDiscountData",
			"doc": "/**\n     * @return mixed\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getQuoteDiscountData = function() { return `/**\n     * @return mixed\n     */`; };"
		},
		{
			"name": "removeQuoteDiscounts",
			"doc": "/**\n     * Allow front end to remove the session discount ids\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.removeQuoteDiscounts = function() { return `/**\n     * Allow front end to remove the session discount ids\n     */`; };"
		},
		{
			"name": "getSubtotalExTax",
			"doc": "/**\n     * @return mixed\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getSubtotalExTax = function() { return `/**\n     * @return mixed\n     */`; };"
		},
		{
			"name": "getItemTotal",
			"doc": "/**\n     * @return mixed\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getItemTotal = function() { return `/**\n     * @return mixed\n     */`; };"
		},
		{
			"name": "getPreview",
			"doc": "/**\n     * @return mixed\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getPreview = function() { return `/**\n     * @return mixed\n     */`; };"
		},
		{
			"name": "getShippingDisplay",
			"doc": "/**\n     * @return mixed\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getShippingDisplay = function() { return `/**\n     * @return mixed\n     */`; };"
		},
		{
			"name": "getShippingPickupRates",
			"doc": "/**\n     * @return mixed\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getShippingPickupRates = function() { return `/**\n     * @return mixed\n     */`; };"
		},
		{
			"name": "getShippingRates",
			"doc": "/**\n     * @return mixed\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getShippingRates = function() { return `/**\n     * @return mixed\n     */`; };"
		},
		{
			"name": "getShippingError",
			"doc": "/**\n     * @return mixed\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getShippingError = function() { return `/**\n     * @return mixed\n     */`; };"
		},
		{
			"name": "getShippingRatesList",
			"doc": "/**\n     * @return mixed\n     */",
			"params": "",
			"fn": "\nCart3View.prototype.getShippingRatesList = function() { return `/**\n     * @return mixed\n     */`; };"
		}
	],
	"ProductCategory": [
		{
			"name": "__construct",
			"doc": "/**\r\n     * @param $resArr\r\n     */",
			"params": "resArr",
			"fn": "\nProductCategory.prototype.__construct = function(resArr) { return `/**\r\n     * @param $resArr\r\n     */`; };"
		},
		{
			"name": "getAuthType",
			"doc": "/**\r\n     * Returns the category's authenticity type\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getAuthType = function() { return `/**\r\n     * Returns the category's authenticity type\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "show",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.show = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "add",
			"doc": "/**\r\n     * Adds a new category\r\n     * @param array $args\r\n     * @return boolean Returns false on failure\r\n     */",
			"params": "args",
			"fn": "\nProductCategory.prototype.add = function(args) { return `/**\r\n     * Adds a new category\r\n     * @param array $args\r\n     * @return boolean Returns false on failure\r\n     */`; };"
		},
		{
			"name": "addChild",
			"doc": "/**\r\n     * Adds a new child category\r\n     * @param array $args\r\n     * @return boolean Returns false on failure\r\n     */",
			"params": "args",
			"fn": "\nProductCategory.prototype.addChild = function(args) { return `/**\r\n     * Adds a new child category\r\n     * @param array $args\r\n     * @return boolean Returns false on failure\r\n     */`; };"
		},
		{
			"name": "getField",
			"doc": "/**\r\n     * Returns the category field\r\n     * @param  $key\r\n     * @return mixed\r\n     */",
			"params": "key",
			"fn": "\nProductCategory.prototype.getField = function(key) { return `/**\r\n     * Returns the category field\r\n     * @param  $key\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "setRecord",
			"doc": "/**\r\n     * Assigns the category record\r\n     * @param $newRecord\r\n     */",
			"params": "newRecord",
			"fn": "\nProductCategory.prototype.setRecord = function(newRecord) { return `/**\r\n     * Assigns the category record\r\n     * @param $newRecord\r\n     */`; };"
		},
		{
			"name": "setField",
			"doc": "/**\r\n     * Assigns the category field\r\n     * @param $fldStr\r\n     * @param $newValue\r\n     */",
			"params": "fldStr, newValue",
			"fn": "\nProductCategory.prototype.setField = function(fldStr, newValue) { return `/**\r\n     * Assigns the category field\r\n     * @param $fldStr\r\n     * @param $newValue\r\n     */`; };"
		},
		{
			"name": "update",
			"doc": "/**\r\n     * @param array $args\r\n     */",
			"params": "args",
			"fn": "\nProductCategory.prototype.update = function(args) { return `/**\r\n     * @param array $args\r\n     */`; };"
		},
		{
			"name": "getID",
			"doc": "/**\r\n     * Adds a new category ID\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getID = function() { return `/**\r\n     * Adds a new category ID\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getParentID",
			"doc": "/**\r\n     * Returns the parent category ID\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getParentID = function() { return `/**\r\n     * Returns the parent category ID\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getMerchantID",
			"doc": "/**\r\n     * Rerurns the category merchant ID\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getMerchantID = function() { return `/**\r\n     * Rerurns the category merchant ID\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getCentreID",
			"doc": "/**\r\n     * Returns the category's centre ID\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getCentreID = function() { return `/**\r\n     * Returns the category's centre ID\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getAction",
			"doc": "/**\r\n     * Returns the category's action\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getAction = function() { return `/**\r\n     * Returns the category's action\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getActionValue",
			"doc": "/**\r\n     * Returns the category's action value\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getActionValue = function() { return `/**\r\n     * Returns the category's action value\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getName",
			"doc": "/**\r\n     * Returns the category's name\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getName = function() { return `/**\r\n     * Returns the category's name\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getDescription",
			"doc": "/**\r\n     * Returns the category's description\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getDescription = function() { return `/**\r\n     * Returns the category's description\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getTags",
			"doc": "/**\r\n     * Returns the category's tags\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getTags = function() { return `/**\r\n     * Returns the category's tags\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getUrlName",
			"doc": "/**\r\n     * Returns the category's url name\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getUrlName = function() { return `/**\r\n     * Returns the category's url name\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getPermanentLink",
			"doc": "/**\r\n     * Returns the category's permanent link\r\n     * @param boolean $full\r\n     * @return string\r\n     */",
			"params": "full",
			"fn": "\nProductCategory.prototype.getPermanentLink = function(full) { return `/**\r\n     * Returns the category's permanent link\r\n     * @param boolean $full\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "getSearch",
			"doc": "/**\r\n     * Returns the category search\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getSearch = function() { return `/**\r\n     * Returns the category search\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getBundleOnly",
			"doc": "/**\r\n     * Returns the bundle\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getBundleOnly = function() { return `/**\r\n     * Returns the bundle\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getComment",
			"doc": "/**\r\n     * Returns the category comment\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getComment = function() { return `/**\r\n     * Returns the category comment\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getComment2",
			"doc": false,
			"params": "",
			"fn": "\nProductCategory.prototype.getComment2 = function() { return ``; };"
		},
		{
			"name": "getComment3",
			"doc": false,
			"params": "",
			"fn": "\nProductCategory.prototype.getComment3 = function() { return ``; };"
		},
		{
			"name": "getComment4",
			"doc": false,
			"params": "",
			"fn": "\nProductCategory.prototype.getComment4 = function() { return ``; };"
		},
		{
			"name": "getComment5",
			"doc": false,
			"params": "",
			"fn": "\nProductCategory.prototype.getComment5 = function() { return ``; };"
		},
		{
			"name": "getImage",
			"doc": "/**\r\n     * Returns the category image\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getImage = function() { return `/**\r\n     * Returns the category image\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getIndex",
			"doc": "/**\r\n     * Returns the category's index\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getIndex = function() { return `/**\r\n     * Returns the category's index\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getStatus",
			"doc": "/**\r\n     * Returns the category's status\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getStatus = function() { return `/**\r\n     * Returns the category's status\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getShow",
			"doc": "/**\r\n     * Returns the published category\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getShow = function() { return `/**\r\n     * Returns the published category\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getPublish",
			"doc": "/**\r\n     *\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getPublish = function() { return `/**\r\n     *\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "isLocked",
			"doc": "/**\r\n     * Checks if the category is locked\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.isLocked = function() { return `/**\r\n     * Checks if the category is locked\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getLockedID",
			"doc": "/**\r\n     * Returns the locked category ID\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getLockedID = function() { return `/**\r\n     * Returns the locked category ID\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getMediumImage",
			"doc": "/**\r\n     * Returns the medium size category image\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getMediumImage = function() { return `/**\r\n     * Returns the medium size category image\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getSmallImage",
			"doc": "/**\r\n     * Returns the small size category image\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getSmallImage = function() { return `/**\r\n     * Returns the small size category image\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "inheritsAccess",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.inheritsAccess = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "catTypeAction",
			"doc": "/**\r\n     * Redirects users according to the category type action\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.catTypeAction = function() { return `/**\r\n     * Redirects users according to the category type action\r\n     */`; };"
		},
		{
			"name": "isRoot",
			"doc": "/**\r\n     * Checks if the category is the root category\r\n     * @return boolean Returns false on failure\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.isRoot = function() { return `/**\r\n     * Checks if the category is the root category\r\n     * @return boolean Returns false on failure\r\n     */`; };"
		},
		{
			"name": "getDefaultAccess",
			"doc": "/**\r\n     * Returns the category's default access\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getDefaultAccess = function() { return `/**\r\n     * Returns the category's default access\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getParent",
			"doc": "/**\r\n     * Returns the parent category\r\n     * @return mixed Returns false on failure\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getParent = function() { return `/**\r\n     * Returns the parent category\r\n     * @return mixed Returns false on failure\r\n     */`; };"
		},
		{
			"name": "getOwnerDetails",
			"doc": "/**\r\n     * Returns the details of the category owner\r\n     * @return mixed Returns false on failure\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getOwnerDetails = function() { return `/**\r\n     * Returns the details of the category owner\r\n     * @return mixed Returns false on failure\r\n     */`; };"
		},
		{
			"name": "getOwner",
			"doc": "/**\r\n     * Returns the owner of the category\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getOwner = function() { return `/**\r\n     * Returns the owner of the category\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "reindex",
			"doc": "/**\r\n     * Re-indexes the category\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.reindex = function() { return `/**\r\n     * Re-indexes the category\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "reindexTree",
			"doc": "/**\r\n     * Re-indexes the category tree\r\n     * @param  $merchant_id\r\n     * @param  $parent_id\r\n     * @param  $index\r\n     * @return mixed\r\n     */",
			"params": "merchant_id, parent_id, index",
			"fn": "\nProductCategory.prototype.reindexTree = function(merchant_id, parent_id, index) { return `/**\r\n     * Re-indexes the category tree\r\n     * @param  $merchant_id\r\n     * @param  $parent_id\r\n     * @param  $index\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "createOptions",
			"doc": "/**\r\n     * Creates the options for the category\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.createOptions = function() { return `/**\r\n     * Creates the options for the category\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "createOptionsArray",
			"doc": "/**\r\n     * Creates the options array for the product category\r\n     * @param  $prodcat\r\n     * @param  $array\r\n     * @return mixed\r\n     */",
			"params": "prodcat, array",
			"fn": "\nProductCategory.prototype.createOptionsArray = function(prodcat, array) { return `/**\r\n     * Creates the options array for the product category\r\n     * @param  $prodcat\r\n     * @param  $array\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getAllSubProdcats",
			"doc": "/**\r\n     * Returns all the sub product categories\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getAllSubProdcats = function() { return `/**\r\n     * Returns all the sub product categories\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getSubProdcats",
			"doc": "/**\r\n     * Returns sub product categories\r\n     * @param  $status\r\n     * @return mixed\r\n     */",
			"params": "status",
			"fn": "\nProductCategory.prototype.getSubProdcats = function(status) { return `/**\r\n     * Returns sub product categories\r\n     * @param  $status\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getSubProdcatsIDs",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getSubProdcatsIDs = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getSubProdcatsProductCount",
			"doc": "/**\r\n     * Returns the number of sub product category products\r\n     * @param $status\r\n     */",
			"params": "status",
			"fn": "\nProductCategory.prototype.getSubProdcatsProductCount = function(status) { return `/**\r\n     * Returns the number of sub product category products\r\n     * @param $status\r\n     */`; };"
		},
		{
			"name": "moveTo",
			"doc": "/**\r\n     * Moves the category to the desired index\r\n     * @param $new_parent_id\r\n     */",
			"params": "new_parent_id",
			"fn": "\nProductCategory.prototype.moveTo = function(new_parent_id) { return `/**\r\n     * Moves the category to the desired index\r\n     * @param $new_parent_id\r\n     */`; };"
		},
		{
			"name": "setStatus",
			"doc": "/**\r\n     * Assigns the category's status\r\n     * @param $newStatus\r\n     * @return boolean\r\n     */",
			"params": "newStatus",
			"fn": "\nProductCategory.prototype.setStatus = function(newStatus) { return `/**\r\n     * Assigns the category's status\r\n     * @param $newStatus\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "setLocked",
			"doc": "/**\r\n     * Assigns the locked category\r\n     * @param $falseOrUser\r\n     */",
			"params": "falseOrUser",
			"fn": "\nProductCategory.prototype.setLocked = function(falseOrUser) { return `/**\r\n     * Assigns the locked category\r\n     * @param $falseOrUser\r\n     */`; };"
		},
		{
			"name": "getLockingUser",
			"doc": "/**\r\n     * Returns the locking user\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getLockingUser = function() { return `/**\r\n     * Returns the locking user\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getLockingUserID",
			"doc": "/**\r\n     * Returns the locking user's ID\r\n     * @return mixed Returns false on failure\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getLockingUserID = function() { return `/**\r\n     * Returns the locking user's ID\r\n     * @return mixed Returns false on failure\r\n     */`; };"
		},
		{
			"name": "getLockingUserName",
			"doc": "/**\r\n     * Returns the name of the locking user\r\n     * @return mixed Returns false on failure\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getLockingUserName = function() { return `/**\r\n     * Returns the name of the locking user\r\n     * @return mixed Returns false on failure\r\n     */`; };"
		},
		{
			"name": "getLockingUserEmail",
			"doc": "/**\r\n     * Returns the locking user's email\r\n     * @return mixed Returns false on failure\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getLockingUserEmail = function() { return `/**\r\n     * Returns the locking user's email\r\n     * @return mixed Returns false on failure\r\n     */`; };"
		},
		{
			"name": "getPath",
			"doc": "/**\r\n     * Returns the category's path\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getPath = function() { return `/**\r\n     * Returns the category's path\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getPath_r",
			"doc": "/**\r\n     * @param  $id\r\n     * @param  $path\r\n     * @return mixed\r\n     */",
			"params": "id, path",
			"fn": "\nProductCategory.prototype.getPath_r = function(id, path) { return `/**\r\n     * @param  $id\r\n     * @param  $path\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "GetCategoryPath",
			"doc": "/**\r\n     * Returns the category's path\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.GetCategoryPath = function() { return `/**\r\n     * Returns the category's path\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getInheritAccess",
			"doc": "/**\r\n     * Returns the category's inherit access\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getInheritAccess = function() { return `/**\r\n     * Returns the category's inherit access\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "setDefaultAccess",
			"doc": "/**\r\n     * Assigns the category's default access\r\n     * @param $mode\r\n     * @return boolean\r\n     */",
			"params": "mode",
			"fn": "\nProductCategory.prototype.setDefaultAccess = function(mode) { return `/**\r\n     * Assigns the category's default access\r\n     * @param $mode\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "setInheritAccess",
			"doc": "/**\r\n     * Assigns the category's default access\r\n     * @param $inheritAccess\r\n     * @return boolean\r\n     */",
			"params": "inheritAccess",
			"fn": "\nProductCategory.prototype.setInheritAccess = function(inheritAccess) { return `/**\r\n     * Assigns the category's default access\r\n     * @param $inheritAccess\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "remove",
			"doc": "/**\r\n     * Removes the category\r\n     * @return boolean\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.remove = function() { return `/**\r\n     * Removes the category\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "getAllProducts",
			"doc": "/**\r\n     * Returns all category products\r\n     * @param  array $args\r\n     * @return mixed\r\n     */",
			"params": "args",
			"fn": "\nProductCategory.prototype.getAllProducts = function(args) { return `/**\r\n     * Returns all category products\r\n     * @param  array $args\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getProducts",
			"doc": "/**\r\n     * Returns category products\r\n     * @param  $frontend\r\n     * @return mixed\r\n     */",
			"params": "frontend",
			"fn": "\nProductCategory.prototype.getProducts = function(frontend) { return `/**\r\n     * Returns category products\r\n     * @param  $frontend\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getProductsCount",
			"doc": "/**\r\n     * Returns the number of category products\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getProductsCount = function() { return `/**\r\n     * Returns the number of category products\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getSupplierProducts",
			"doc": "/**\r\n     * Returns the category supplier products\r\n     * @param  $supplier_ids\r\n     * @return mixed\r\n     */",
			"params": "supplier_ids",
			"fn": "\nProductCategory.prototype.getSupplierProducts = function(supplier_ids) { return `/**\r\n     * Returns the category supplier products\r\n     * @param  $supplier_ids\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getAllBundles",
			"doc": "/**\r\n     * Returns all bundles\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getAllBundles = function() { return `/**\r\n     * Returns all bundles\r\n     */`; };"
		},
		{
			"name": "isAncestorOf",
			"doc": "/**\r\n     * Checks if the category is an ancestory of the specified category\r\n     * @param $category\r\n     * @return boolean Returns false on failure\r\n     */",
			"params": "category",
			"fn": "\nProductCategory.prototype.isAncestorOf = function(category) { return `/**\r\n     * Checks if the category is an ancestory of the specified category\r\n     * @param $category\r\n     * @return boolean Returns false on failure\r\n     */`; };"
		},
		{
			"name": "getPathArray",
			"doc": "/**\r\n     * Returns the category path array\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getPathArray = function() { return `/**\r\n     * Returns the category path array\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "isParentOf",
			"doc": "/**\r\n     * Checks if the category is the parent of the specified folder\r\n     * @param $folder\r\n     * @return boolean Returns false on failure\r\n     */",
			"params": "folder",
			"fn": "\nProductCategory.prototype.isParentOf = function(folder) { return `/**\r\n     * Checks if the category is the parent of the specified folder\r\n     * @param $folder\r\n     * @return boolean Returns false on failure\r\n     */`; };"
		},
		{
			"name": "getSubCategoriesCount",
			"doc": "/**\r\n     * Returns the number of sub categories\r\n     * @return int\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getSubCategoriesCount = function() { return `/**\r\n     * Returns the number of sub categories\r\n     * @return int\r\n     */`; };"
		},
		{
			"name": "reIndexAllSubCategories",
			"doc": "/**\r\n     * Re-indexes all the sub categories\r\n     * @return boolean\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.reIndexAllSubCategories = function() { return `/**\r\n     * Re-indexes all the sub categories\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "reIndexAllSubCategoriesRecursive",
			"doc": "/**\r\n     * Re-indexes all the sub categories (recursively)\r\n     * @return boolean\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.reIndexAllSubCategoriesRecursive = function() { return `/**\r\n     * Re-indexes all the sub categories (recursively)\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "getChild",
			"doc": "/**\r\n     * Returns the child category\r\n     * @param array $args\r\n     * @return mixed\r\n     */",
			"params": "args",
			"fn": "\nProductCategory.prototype.getChild = function(args) { return `/**\r\n     * Returns the child category\r\n     * @param array $args\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "reIndexSelf",
			"doc": "/**\r\n     * Re-indexes the current category object\r\n     * @return boolean\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.reIndexSelf = function() { return `/**\r\n     * Re-indexes the current category object\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "moveToIndex",
			"doc": "/**\r\n     * Moves the category to the specified index\r\n     * @param $order\r\n     * @return boolean\r\n     */",
			"params": "order",
			"fn": "\nProductCategory.prototype.moveToIndex = function(order) { return `/**\r\n     * Moves the category to the specified index\r\n     * @param $order\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "copyTo",
			"doc": "/**\r\n     * Copies the product category object or ID to the specfied product category\r\n     * @param  $prodcat     Parameter can be either prodcat object or prodcat id.\r\n     * @param  $recursive\r\n     * @return mixed\r\n     */",
			"params": "prodcat, recursive",
			"fn": "\nProductCategory.prototype.copyTo = function(prodcat, recursive) { return `/**\r\n     * Copies the product category object or ID to the specfied product category\r\n     * @param  $prodcat     Parameter can be either prodcat object or prodcat id.\r\n     * @param  $recursive\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "reindexCopy",
			"doc": "/**\r\n     * Re-indexes the copied object\r\n     * @param  $centre_id\r\n     * @return mixed\r\n     */",
			"params": "centre_id",
			"fn": "\nProductCategory.prototype.reindexCopy = function(centre_id) { return `/**\r\n     * Re-indexes the copied object\r\n     * @param  $centre_id\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "reindexTreeCopy",
			"doc": "/**\r\n     * @param  $merchant_id\r\n     * @param  $parent_id\r\n     * @param  $index\r\n     * @param  $centre_id\r\n     * @return mixed\r\n     */",
			"params": "merchant_id, parent_id, index, centre_id",
			"fn": "\nProductCategory.prototype.reindexTreeCopy = function(merchant_id, parent_id, index, centre_id) { return `/**\r\n     * @param  $merchant_id\r\n     * @param  $parent_id\r\n     * @param  $index\r\n     * @param  $centre_id\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getAssets",
			"doc": "/**\r\n     * getAssets\r\n     *\r\n     * Returns the array of assets\r\n     *\r\n     * @return array\r\n     */",
			"params": "",
			"fn": "\nProductCategory.prototype.getAssets = function() { return `/**\r\n     * getAssets\r\n     *\r\n     * Returns the array of assets\r\n     *\r\n     * @return array\r\n     */`; };"
		},
		{
			"name": "getMeta",
			"doc": "/**\r\n     * getMeta\r\n     *\r\n     * Get the category meta object.\r\n     *\r\n     * @param  string $field The specific category meta field\r\n     * @return string|Meta\r\n     */",
			"params": "field",
			"fn": "\nProductCategory.prototype.getMeta = function(field) { return `/**\r\n     * getMeta\r\n     *\r\n     * Get the category meta object.\r\n     *\r\n     * @param  string $field The specific category meta field\r\n     * @return string|Meta\r\n     */`; };"
		},
		{
			"name": "setMetaData",
			"doc": "/**\r\n     * setMetaData\r\n     *\r\n     * Save category metadata values.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @see  Meta\r\n     */",
			"params": "args",
			"fn": "\nProductCategory.prototype.setMetaData = function(args) { return `/**\r\n     * setMetaData\r\n     *\r\n     * Save category metadata values.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @see  Meta\r\n     */`; };"
		}
	],
	"Page": [
		{
			"name": "__construct",
			"doc": "/**\r\n     * Page\r\n     *\r\n     * The class constuctor\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param integer $id The page record id\r\n     * @param integer $parent_id The parent page id\r\n     * @param integer $merchant_id The page merchant id\r\n     * @param string $url_name The page permalink slug\r\n     * @param integer $centre_id The page centre id\r\n     * @param integer $index The page index value\r\n     * @param string $author The page author name\r\n     * @param string $name The page name\r\n     * @param string $link_alt The page link alt value\r\n     * @param string $action The page action value\r\n     * @param string $meta_description The page meta description value\r\n     * @param string $meta_keywords The meta keywords value\r\n     * @param string $title The page title value\r\n     * @param string $status The page status value\r\n     * @param string $show The page show value\r\n     * @param integer $modified_date The modified date timestamp\r\n     * @param integer $start_date The page start date\r\n     * @param integer $end_date The page end date\r\n     * @param integer $locked The page lock value\r\n     * @param integer $inheritAccess The inherit access value\r\n     * @param integer $defaultAccess The default access value\r\n     * @param integer $ownerID The page owner id value\r\n     * @param string $comment The page comment value\r\n     * @param string $action_value The page action value\r\n     * @param string $tags The page ags\r\n     * @param string $title_tags The page title tags value\r\n     * @param string $alt_tags The page alt tags value\r\n     * @param string $image1 The page image attachment value\r\n     * @param string $image2 The page image attachment value\r\n     * @param string $file1 The page file attachment value\r\n     * @param string $page_laout The page layout used\r\n     * @param string $page_use The page use\r\n     * @param boolean $inherit_attach\r\n     * @param boolean $inherit_linked\r\n     * @param integer $blueprintId\r\n     */",
			"params": "id, guid, parent_id, merchant_id, url_name, centre_id, index, author, name, link_alt, action, meta_description, meta_keywords, title, status, show, created_date, modified_date, start_date, end_date, locked, inheritAccess, defaultAccess, ownerID, comment, action_value, tags, title_tags, alt_tags, image1, image2, file1, page_layout, page_use, inherit_attach, inherit_linked, blueprint_id",
			"fn": "\nPage.prototype.__construct = function(id, guid, parent_id, merchant_id, url_name, centre_id, index, author, name, link_alt, action, meta_description, meta_keywords, title, status, show, created_date, modified_date, start_date, end_date, locked, inheritAccess, defaultAccess, ownerID, comment, action_value, tags, title_tags, alt_tags, image1, image2, file1, page_layout, page_use, inherit_attach, inherit_linked, blueprint_id) { return `/**\r\n     * Page\r\n     *\r\n     * The class constuctor\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param integer $id The page record id\r\n     * @param integer $parent_id The parent page id\r\n     * @param integer $merchant_id The page merchant id\r\n     * @param string $url_name The page permalink slug\r\n     * @param integer $centre_id The page centre id\r\n     * @param integer $index The page index value\r\n     * @param string $author The page author name\r\n     * @param string $name The page name\r\n     * @param string $link_alt The page link alt value\r\n     * @param string $action The page action value\r\n     * @param string $meta_description The page meta description value\r\n     * @param string $meta_keywords The meta keywords value\r\n     * @param string $title The page title value\r\n     * @param string $status The page status value\r\n     * @param string $show The page show value\r\n     * @param integer $modified_date The modified date timestamp\r\n     * @param integer $start_date The page start date\r\n     * @param integer $end_date The page end date\r\n     * @param integer $locked The page lock value\r\n     * @param integer $inheritAccess The inherit access value\r\n     * @param integer $defaultAccess The default access value\r\n     * @param integer $ownerID The page owner id value\r\n     * @param string $comment The page comment value\r\n     * @param string $action_value The page action value\r\n     * @param string $tags The page ags\r\n     * @param string $title_tags The page title tags value\r\n     * @param string $alt_tags The page alt tags value\r\n     * @param string $image1 The page image attachment value\r\n     * @param string $image2 The page image attachment value\r\n     * @param string $file1 The page file attachment value\r\n     * @param string $page_laout The page layout used\r\n     * @param string $page_use The page use\r\n     * @param boolean $inherit_attach\r\n     * @param boolean $inherit_linked\r\n     * @param integer $blueprintId\r\n     */`; };"
		},
		{
			"name": "setProperties",
			"doc": "/**\r\n     * setProperties\r\n     *\r\n     * Sets the class properties from the $resArr variable\r\n     *\r\n     * @internal  This is not for public consumption\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.setProperties = function() { return `/**\r\n     * setProperties\r\n     *\r\n     * Sets the class properties from the $resArr variable\r\n     *\r\n     * @internal  This is not for public consumption\r\n     */`; };"
		},
		{
			"name": "setField",
			"doc": "/**\r\n     * setField\r\n     *\r\n     * Set the page attribute value. This is a dynamic approach to setter functions,\r\n     * eg. setField('name') would work the same as setName(). This is mainly\r\n     * utilized in setRecord() method.\r\n     *\r\n     * @internal This is not for public consumption\r\n     * @param string $fldStr The page attribute name\r\n     * @param string $newValue The new value\r\n     */",
			"params": "fldStr, newValue",
			"fn": "\nPage.prototype.setField = function(fldStr, newValue) { return `/**\r\n     * setField\r\n     *\r\n     * Set the page attribute value. This is a dynamic approach to setter functions,\r\n     * eg. setField('name') would work the same as setName(). This is mainly\r\n     * utilized in setRecord() method.\r\n     *\r\n     * @internal This is not for public consumption\r\n     * @param string $fldStr The page attribute name\r\n     * @param string $newValue The new value\r\n     */`; };"
		},
		{
			"name": "getField",
			"doc": "/**\r\n     * getField\r\n     *\r\n     * Get the page attribute value. This is a dynamic approach to getter functions,\r\n     * eg. getField('name') would return the same value as getName().\r\n     *\r\n     * @param  string $key The page attribute name\r\n     * @return string|integer The page attribute value\r\n     */",
			"params": "key",
			"fn": "\nPage.prototype.getField = function(key) { return `/**\r\n     * getField\r\n     *\r\n     * Get the page attribute value. This is a dynamic approach to getter functions,\r\n     * eg. getField('name') would return the same value as getName().\r\n     *\r\n     * @param  string $key The page attribute name\r\n     * @return string|integer The page attribute value\r\n     */`; };"
		},
		{
			"name": "setRecord",
			"doc": "/**\r\n     * setRecord\r\n     *\r\n     * Set the one or page attribute values at the same time. Accepts\r\n     * an array of page attributes to set.  This method utilizes the setField()\r\n     * method.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param array $newRecord Array of field attributes to set\r\n     */",
			"params": "newRecord",
			"fn": "\nPage.prototype.setRecord = function(newRecord) { return `/**\r\n     * setRecord\r\n     *\r\n     * Set the one or page attribute values at the same time. Accepts\r\n     * an array of page attributes to set.  This method utilizes the setField()\r\n     * method.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param array $newRecord Array of field attributes to set\r\n     */`; };"
		},
		{
			"name": "getParentNew",
			"doc": "/**\r\n     * getParentNew\r\n     *\r\n     * Get parent page object.\r\n     *\r\n     * @return Page The parent page object\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getParentNew = function() { return `/**\r\n     * getParentNew\r\n     *\r\n     * Get parent page object.\r\n     *\r\n     * @return Page The parent page object\r\n     */`; };"
		},
		{
			"name": "getHeading",
			"doc": "/**\r\n     * getHeading\r\n     *\r\n     * Get the page heading.\r\n     *\r\n     * @return string The page heading value\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getHeading = function() { return `/**\r\n     * getHeading\r\n     *\r\n     * Get the page heading.\r\n     *\r\n     * @return string The page heading value\r\n     */`; };"
		},
		{
			"name": "getLocked",
			"doc": "/**\r\n     * getLocked\r\n     *\r\n     * Get the lock field value\r\n     *\r\n     * @return integer The page lock value\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getLocked = function() { return `/**\r\n     * getLocked\r\n     *\r\n     * Get the lock field value\r\n     *\r\n     * @return integer The page lock value\r\n     */`; };"
		},
		{
			"name": "show",
			"doc": "/**\r\n     * show\r\n     *\r\n     * Returns the page attributes.\r\n     *\r\n     * @return array The page attributes in array form\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.show = function() { return `/**\r\n     * show\r\n     *\r\n     * Returns the page attributes.\r\n     *\r\n     * @return array The page attributes in array form\r\n     */`; };"
		},
		{
			"name": "getPublish",
			"doc": "/**\r\n     * getPublish\r\n     *\r\n     * Get the publish value.\r\n     *\r\n     * @return string The page publish value\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getPublish = function() { return `/**\r\n     * getPublish\r\n     *\r\n     * Get the publish value.\r\n     *\r\n     * @return string The page publish value\r\n     */`; };"
		},
		{
			"name": "getInheritaccess",
			"doc": "/**\r\n     * getInheritaccess\r\n     *\r\n     * Get the page inherit access value.\r\n     *\r\n     * @return integer The inherit access value\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getInheritaccess = function() { return `/**\r\n     * getInheritaccess\r\n     *\r\n     * Get the page inherit access value.\r\n     *\r\n     * @return integer The inherit access value\r\n     */`; };"
		},
		{
			"name": "getPathNew",
			"doc": "/**\r\n     * getPathNew\r\n     *\r\n     * Get all the current page's ancestor pages.\r\n     * Example:\r\n     * Suppose we have the following page tree:\r\n     * <ul>\r\n     *   <li>Root\r\n     *     <ul>\r\n     *       <li>Page1\r\n     *         <ul>\r\n     *           <li>Page2 (current page object)</li>\r\n     *         </ul>\r\n     *       </li>\r\n     *     </ul>\r\n     *  </li>\r\n     * </ul>\r\n     * The function will return Root, Page1 and Page2 objects\r\n     *\r\n     * @return array\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getPathNew = function() { return `/**\r\n     * getPathNew\r\n     *\r\n     * Get all the current page's ancestor pages.\r\n     * Example:\r\n     * Suppose we have the following page tree:\r\n     * <ul>\r\n     *   <li>Root\r\n     *     <ul>\r\n     *       <li>Page1\r\n     *         <ul>\r\n     *           <li>Page2 (current page object)</li>\r\n     *         </ul>\r\n     *       </li>\r\n     *     </ul>\r\n     *  </li>\r\n     * </ul>\r\n     * The function will return Root, Page1 and Page2 objects\r\n     *\r\n     * @return array\r\n     */`; };"
		},
		{
			"name": "getPathArray",
			"doc": "/**\r\n     * getPathArray\r\n     *\r\n     * Get all the current page's ancestor pages starting from parent page.\r\n     * Example:\r\n     * Suppose we have the following page tree:\r\n     * <ul>\r\n     *   <li>Root\r\n     *     <ul>\r\n     *       <li>Page1\r\n     *         <ul>\r\n     *           <li>Page2 (current page object)</li>\r\n     *         </ul>\r\n     *       </li>\r\n     *     </ul>\r\n     *  </li>\r\n     * </ul>\r\n     * The function will return Root and Page1 objects\r\n     *\r\n     * @return array\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getPathArray = function() { return `/**\r\n     * getPathArray\r\n     *\r\n     * Get all the current page's ancestor pages starting from parent page.\r\n     * Example:\r\n     * Suppose we have the following page tree:\r\n     * <ul>\r\n     *   <li>Root\r\n     *     <ul>\r\n     *       <li>Page1\r\n     *         <ul>\r\n     *           <li>Page2 (current page object)</li>\r\n     *         </ul>\r\n     *       </li>\r\n     *     </ul>\r\n     *  </li>\r\n     * </ul>\r\n     * The function will return Root and Page1 objects\r\n     *\r\n     * @return array\r\n     */`; };"
		},
		{
			"name": "getTags",
			"doc": "/**\r\n     * getTags\r\n     *\r\n     * Get the page tags value.\r\n     *\r\n     * @return string The title tags value\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getTags = function() { return `/**\r\n     * getTags\r\n     *\r\n     * Get the page tags value.\r\n     *\r\n     * @return string The title tags value\r\n     */`; };"
		},
		{
			"name": "getTitleTags",
			"doc": "/**\r\n     * getTitleTags\r\n     *\r\n     * Get the page title tags value.\r\n     *\r\n     * @return string The title tags value\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getTitleTags = function() { return `/**\r\n     * getTitleTags\r\n     *\r\n     * Get the page title tags value.\r\n     *\r\n     * @return string The title tags value\r\n     */`; };"
		},
		{
			"name": "getAltTags",
			"doc": "/**\r\n     * getAltTags\r\n     *\r\n     * Get the page alt tags value.\r\n     *\r\n     * @return string The alt tags value\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getAltTags = function() { return `/**\r\n     * getAltTags\r\n     *\r\n     * Get the page alt tags value.\r\n     *\r\n     * @return string The alt tags value\r\n     */`; };"
		},
		{
			"name": "getAltTag",
			"doc": "/**\r\n     * getAltTag\r\n     *\r\n     * Get the page alt tags value. Alias of getAltTags().\r\n     *\r\n     * @return string The alt tags value\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getAltTag = function() { return `/**\r\n     * getAltTag\r\n     *\r\n     * Get the page alt tags value. Alias of getAltTags().\r\n     *\r\n     * @return string The alt tags value\r\n     */`; };"
		},
		{
			"name": "getTag",
			"doc": "/**\r\n     * getTag\r\n     *\r\n     * Get the page tags value.\r\n     *\r\n     * @return string The title tags value\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getTag = function() { return `/**\r\n     * getTag\r\n     *\r\n     * Get the page tags value.\r\n     *\r\n     * @return string The title tags value\r\n     */`; };"
		},
		{
			"name": "getTitleTag",
			"doc": "/**\r\n     * getTitleTag\r\n     *\r\n     * Get the title tags value. Alias of getTitleTags().\r\n     *\r\n     * @return string The title tags value.\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getTitleTag = function() { return `/**\r\n     * getTitleTag\r\n     *\r\n     * Get the title tags value. Alias of getTitleTags().\r\n     *\r\n     * @return string The title tags value.\r\n     */`; };"
		},
		{
			"name": "add",
			"doc": "/**\r\n     * add\r\n     *\r\n     * Create new page record.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * $resArr value will be used.\r\n     * page record. Returns false if failed.\r\n     * @param  array $args The page attributes to be saved. If not provided, the\r\n     * @return integer|boolean Returns the page id of newly created\r\n     */",
			"params": "args",
			"fn": "\nPage.prototype.add = function(args) { return `/**\r\n     * add\r\n     *\r\n     * Create new page record.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * $resArr value will be used.\r\n     * page record. Returns false if failed.\r\n     * @param  array $args The page attributes to be saved. If not provided, the\r\n     * @return integer|boolean Returns the page id of newly created\r\n     */`; };"
		},
		{
			"name": "update",
			"doc": "/**\r\n     * update\r\n     *\r\n     * Update page object record.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * $resArr value will be used.\r\n     * @param array $args The page attributes to be saved. If not provided, the\r\n     */",
			"params": "args",
			"fn": "\nPage.prototype.update = function(args) { return `/**\r\n     * update\r\n     *\r\n     * Update page object record.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * $resArr value will be used.\r\n     * @param array $args The page attributes to be saved. If not provided, the\r\n     */`; };"
		},
		{
			"name": "removeNew",
			"doc": "/**\r\n     * removeNew\r\n     *\r\n     * Delete the page object record\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @return boolean\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.removeNew = function() { return `/**\r\n     * removeNew\r\n     *\r\n     * Delete the page object record\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "setInheritAccessNew",
			"doc": "/**\r\n     * setInheritAccessNew\r\n     *\r\n     * Set new inherit access value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param integer $new_access The attribute value\r\n     */",
			"params": "new_access",
			"fn": "\nPage.prototype.setInheritAccessNew = function(new_access) { return `/**\r\n     * setInheritAccessNew\r\n     *\r\n     * Set new inherit access value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param integer $new_access The attribute value\r\n     */`; };"
		},
		{
			"name": "setDefaultAccessNew",
			"doc": "/**\r\n     * setDefaultAccessNew\r\n     *\r\n     * Set new default access value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $new_access The new attribute value\r\n     */",
			"params": "new_access",
			"fn": "\nPage.prototype.setDefaultAccessNew = function(new_access) { return `/**\r\n     * setDefaultAccessNew\r\n     *\r\n     * Set new default access value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $new_access The new attribute value\r\n     */`; };"
		},
		{
			"name": "getChild",
			"doc": "/**\r\n     * getChild\r\n     *\r\n     * Get the child pages of current page object.\r\n     *\r\n     * @return array The child pages\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getChild = function() { return `/**\r\n     * getChild\r\n     *\r\n     * Get the child pages of current page object.\r\n     *\r\n     * @return array The child pages\r\n     */`; };"
		},
		{
			"name": "getChildren",
			"doc": "/**\r\n     * getChild\r\n     *\r\n     * Get the child pages of current page object. Alias of getChild().\r\n     *\r\n     * @return array The child pages\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getChildren = function() { return `/**\r\n     * getChild\r\n     *\r\n     * Get the child pages of current page object. Alias of getChild().\r\n     *\r\n     * @return array The child pages\r\n     */`; };"
		},
		{
			"name": "getChildCount",
			"doc": "/**\r\n     * getChildCount\r\n     *\r\n     * Get the total number of subpages.\r\n     *\r\n     * @return integer\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getChildCount = function() { return `/**\r\n     * getChildCount\r\n     *\r\n     * Get the total number of subpages.\r\n     *\r\n     * @return integer\r\n     */`; };"
		},
		{
			"name": "getNoOfChildren",
			"doc": "/**\r\n     * getNoOfChildren\r\n     *\r\n     * Get the total number of subpages. Alias of getChildCount().\r\n     *\r\n     * @return integer\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getNoOfChildren = function() { return `/**\r\n     * getNoOfChildren\r\n     *\r\n     * Get the total number of subpages. Alias of getChildCount().\r\n     *\r\n     * @return integer\r\n     */`; };"
		},
		{
			"name": "getSubPagesNew",
			"doc": "/**\r\n     * getSubpagesNew\r\n     *\r\n     * Get the child pages of current page object. Alias of getChild().\r\n     *\r\n     * @return array\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getSubPagesNew = function() { return `/**\r\n     * getSubpagesNew\r\n     *\r\n     * Get the child pages of current page object. Alias of getChild().\r\n     *\r\n     * @return array\r\n     */`; };"
		},
		{
			"name": "getSubPagesCount",
			"doc": "/**\r\n     * getSubPagesCount\r\n     *\r\n     * Get the total number of subpages. Alias of getChildCount().\r\n     *\r\n     * @return integer\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getSubPagesCount = function() { return `/**\r\n     * getSubPagesCount\r\n     *\r\n     * Get the total number of subpages. Alias of getChildCount().\r\n     *\r\n     * @return integer\r\n     */`; };"
		},
		{
			"name": "copyTo",
			"doc": "/**\r\n     * copyTo\r\n     *\r\n     * Copy the current page object to target page as a subpage.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param  Page $page The target page\r\n     * @param  boolean $recursive Whether to includ the subpages or not\r\n     * @return boolean\r\n     */",
			"params": "page, recursive",
			"fn": "\nPage.prototype.copyTo = function(page, recursive) { return `/**\r\n     * copyTo\r\n     *\r\n     * Copy the current page object to target page as a subpage.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param  Page $page The target page\r\n     * @param  boolean $recursive Whether to includ the subpages or not\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "attachTo",
			"doc": "/**\r\n     * attachTo\r\n     *\r\n     * Move the current page object to target page.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param  Page $page The target page\r\n     * @param  integer $index The index number of the page in the target page\r\n     * @return boolean\r\n     */",
			"params": "page, index",
			"fn": "\nPage.prototype.attachTo = function(page, index) { return `/**\r\n     * attachTo\r\n     *\r\n     * Move the current page object to target page.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param  Page $page The target page\r\n     * @param  integer $index The index number of the page in the target page\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "shiftTo",
			"doc": "/**\r\n     * shifTo\r\n     *\r\n     * Move current page object under the target page\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param  Page $page The target page\r\n     * @return boolean\r\n     */",
			"params": "page",
			"fn": "\nPage.prototype.shiftTo = function(page) { return `/**\r\n     * shifTo\r\n     *\r\n     * Move current page object under the target page\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param  Page $page The target page\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "reIndexSubPages",
			"doc": "/**\r\n     * reIndexSubpages\r\n     *\r\n     * Re-organize the subpages.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @return boolean\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.reIndexSubPages = function() { return `/**\r\n     * reIndexSubpages\r\n     *\r\n     * Re-organize the subpages.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "reIndexNew",
			"doc": "/**\r\n     * reIndexNew\r\n     *\r\n     * Re-index parent page's subpages\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @return boolean\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.reIndexNew = function() { return `/**\r\n     * reIndexNew\r\n     *\r\n     * Re-index parent page's subpages\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "reIndexAllSubPages",
			"doc": "/**\r\n     * reIndexAllSubPages\r\n     *\r\n     * Re-order the subpages\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @return boolean\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.reIndexAllSubPages = function() { return `/**\r\n     * reIndexAllSubPages\r\n     *\r\n     * Re-order the subpages\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "setLockedNew",
			"doc": "/**\r\n     * setLockedNew\r\n     *\r\n     * Save new lock value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param  boolean|User $falseOrUser The user locking the page\r\n     * @return boolean\r\n     */",
			"params": "falseOrUser",
			"fn": "\nPage.prototype.setLockedNew = function(falseOrUser) { return `/**\r\n     * setLockedNew\r\n     *\r\n     * Save new lock value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param  boolean|User $falseOrUser The user locking the page\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "getLockingUserNew",
			"doc": "/**\r\n     * getLockingUserNew\r\n     *\r\n     * Get the user object who locked the page.\r\n     *\r\n     * @return boolean|Authuser\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getLockingUserNew = function() { return `/**\r\n     * getLockingUserNew\r\n     *\r\n     * Get the user object who locked the page.\r\n     *\r\n     * @return boolean|Authuser\r\n     */`; };"
		},
		{
			"name": "isLockedNew",
			"doc": "/**\r\n     * isLockedNew\r\n     *\r\n     * Check if page is locked,\r\n     *\r\n     * @return boolean\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.isLockedNew = function() { return `/**\r\n     * isLockedNew\r\n     *\r\n     * Check if page is locked,\r\n     *\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "getLockingUserIDNew",
			"doc": "/**\r\n     * getLockingUserIDNew\r\n     *\r\n     * Get the id of the user who locked the page.\r\n     *\r\n     * @return integer\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getLockingUserIDNew = function() { return `/**\r\n     * getLockingUserIDNew\r\n     *\r\n     * Get the id of the user who locked the page.\r\n     *\r\n     * @return integer\r\n     */`; };"
		},
		{
			"name": "getLockingUserNameNew",
			"doc": "/**\r\n     * getLockingUserNameNew\r\n     *\r\n     * Get the username of the user who locked the page.\r\n     *\r\n     * @return boolean|string\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getLockingUserNameNew = function() { return `/**\r\n     * getLockingUserNameNew\r\n     *\r\n     * Get the username of the user who locked the page.\r\n     *\r\n     * @return boolean|string\r\n     */`; };"
		},
		{
			"name": "getLockingUserEmailNew",
			"doc": "/**\r\n     * getLockingUserEmailNew\r\n     *\r\n     * Get the email of the user who locked the page\r\n     *\r\n     * @return boolean|string\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getLockingUserEmailNew = function() { return `/**\r\n     * getLockingUserEmailNew\r\n     *\r\n     * Get the email of the user who locked the page\r\n     *\r\n     * @return boolean|string\r\n     */`; };"
		},
		{
			"name": "isAncestorOf",
			"doc": "/**\r\n     * isAncestorOf\r\n     *\r\n     * Check if current page object of ancestor of target page.\r\n     *\r\n     * @param  Page $page The target page object\r\n     * @return boolean\r\n     */",
			"params": "page",
			"fn": "\nPage.prototype.isAncestorOf = function(page) { return `/**\r\n     * isAncestorOf\r\n     *\r\n     * Check if current page object of ancestor of target page.\r\n     *\r\n     * @param  Page $page The target page object\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "isParentOf",
			"doc": "/**\r\n     * isParentOf\r\n     *\r\n     * Check if page is parent of target page.\r\n     *\r\n     * @param  Page $page The target page\r\n     * @return boolean\r\n     */",
			"params": "page",
			"fn": "\nPage.prototype.isParentOf = function(page) { return `/**\r\n     * isParentOf\r\n     *\r\n     * Check if page is parent of target page.\r\n     *\r\n     * @param  Page $page The target page\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "getContentNew",
			"doc": "/**\r\n     * getContentNew\r\n     *\r\n     * Get the page contents.\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getContentNew = function() { return `/**\r\n     * getContentNew\r\n     *\r\n     * Get the page contents.\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "getParagraph",
			"doc": "/**\r\n     * getParagraph\r\n     *\r\n     * Get the page paragraph object.\r\n     *\r\n     * @return Paragraph\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getParagraph = function() { return `/**\r\n     * getParagraph\r\n     *\r\n     * Get the page paragraph object.\r\n     *\r\n     * @return Paragraph\r\n     */`; };"
		},
		{
			"name": "setContentNew",
			"doc": "/**\r\n     * setContentNew\r\n     *\r\n     * Save page contents.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newContent The new page contents\r\n     */",
			"params": "newContent",
			"fn": "\nPage.prototype.setContentNew = function(newContent) { return `/**\r\n     * setContentNew\r\n     *\r\n     * Save page contents.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newContent The new page contents\r\n     */`; };"
		},
		{
			"name": "moveToIndex",
			"doc": "/**\r\n     * moveToIndex\r\n     *\r\n     * Move the page object to target index.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param integer $order The target index\r\n     */",
			"params": "order",
			"fn": "\nPage.prototype.moveToIndex = function(order) { return `/**\r\n     * moveToIndex\r\n     *\r\n     * Move the page object to target index.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param integer $order The target index\r\n     */`; };"
		},
		{
			"name": "addSubPage",
			"doc": "/**\r\n     * addSubPage\r\n     *\r\n     * Add a subpage to page object.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param Page $new_page The subpage object\r\n     * @param integer $order The subpage index value\r\n     */",
			"params": "new_page, order",
			"fn": "\nPage.prototype.addSubPage = function(new_page, order) { return `/**\r\n     * addSubPage\r\n     *\r\n     * Add a subpage to page object.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param Page $new_page The subpage object\r\n     * @param integer $order The subpage index value\r\n     */`; };"
		},
		{
			"name": "getID",
			"doc": "/**\r\n     * getID\r\n     *\r\n     * Get the page record id.\r\n     *\r\n     * @return integer\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getID = function() { return `/**\r\n     * getID\r\n     *\r\n     * Get the page record id.\r\n     *\r\n     * @return integer\r\n     */`; };"
		},
		{
			"name": "getGuid",
			"doc": "/**\r\n     * getGuid\r\n     *\r\n     * Get the page guid.\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getGuid = function() { return `/**\r\n     * getGuid\r\n     *\r\n     * Get the page guid.\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "setGuid",
			"doc": "/**\r\n     * setGuid\r\n     *\r\n     * Save new page guid.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newGuid The new guid value\r\n     */",
			"params": "newGuid",
			"fn": "\nPage.prototype.setGuid = function(newGuid) { return `/**\r\n     * setGuid\r\n     *\r\n     * Save new page guid.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newGuid The new guid value\r\n     */`; };"
		},
		{
			"name": "getParentID",
			"doc": "/**\r\n     * getParentID\r\n     *\r\n     * Get the parent page id.\r\n     *\r\n     * @return integer\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getParentID = function() { return `/**\r\n     * getParentID\r\n     *\r\n     * Get the parent page id.\r\n     *\r\n     * @return integer\r\n     */`; };"
		},
		{
			"name": "getParent",
			"doc": "/**\r\n     * getParent\r\n     *\r\n     * Get the parent page object.\r\n     *\r\n     * @return Page The parent page object\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getParent = function() { return `/**\r\n     * getParent\r\n     *\r\n     * Get the parent page object.\r\n     *\r\n     * @return Page The parent page object\r\n     */`; };"
		},
		{
			"name": "setParentID",
			"doc": "/**\r\n     * setParentID\r\n     *\r\n     * Set new parent id.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param boolean\r\n     */",
			"params": "newParentID",
			"fn": "\nPage.prototype.setParentID = function(newParentID) { return `/**\r\n     * setParentID\r\n     *\r\n     * Set new parent id.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param boolean\r\n     */`; };"
		},
		{
			"name": "getMerchantID",
			"doc": "/**\r\n     * getMerchantID\r\n     *\r\n     * Get the page merchant id.\r\n     *\r\n     * @return integer\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getMerchantID = function() { return `/**\r\n     * getMerchantID\r\n     *\r\n     * Get the page merchant id.\r\n     *\r\n     * @return integer\r\n     */`; };"
		},
		{
			"name": "setMerchantID",
			"doc": "/**\r\n     * setMerchantID\r\n     *\r\n     * Save new merchant id.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param integer $newMerchantID The new merchant id\r\n     */",
			"params": "newMerchantID",
			"fn": "\nPage.prototype.setMerchantID = function(newMerchantID) { return `/**\r\n     * setMerchantID\r\n     *\r\n     * Save new merchant id.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param integer $newMerchantID The new merchant id\r\n     */`; };"
		},
		{
			"name": "getCentreID",
			"doc": "/**\r\n     * getCentreID\r\n     *\r\n     * Get the centre id.\r\n     *\r\n     * @return integer\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getCentreID = function() { return `/**\r\n     * getCentreID\r\n     *\r\n     * Get the centre id.\r\n     *\r\n     * @return integer\r\n     */`; };"
		},
		{
			"name": "setCentreID",
			"doc": "/**\r\n     * setCentreID\r\n     *\r\n     * Save new centre id value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param integer $newCentreID The new centre id value\r\n     */",
			"params": "newCentreID",
			"fn": "\nPage.prototype.setCentreID = function(newCentreID) { return `/**\r\n     * setCentreID\r\n     *\r\n     * Save new centre id value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param integer $newCentreID The new centre id value\r\n     */`; };"
		},
		{
			"name": "getIndex",
			"doc": "/**\r\n     * getIndex\r\n     *\r\n     * Get the page index number.\r\n     *\r\n     * @return integer\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getIndex = function() { return `/**\r\n     * getIndex\r\n     *\r\n     * Get the page index number.\r\n     *\r\n     * @return integer\r\n     */`; };"
		},
		{
			"name": "setIndex",
			"doc": "/**\r\n     * setIndex\r\n     *\r\n     * Save new index value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param integer $newIndex The new index value\r\n     */",
			"params": "newIndex",
			"fn": "\nPage.prototype.setIndex = function(newIndex) { return `/**\r\n     * setIndex\r\n     *\r\n     * Save new index value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param integer $newIndex The new index value\r\n     */`; };"
		},
		{
			"name": "getAuthor",
			"doc": "/**\r\n     * getAuthor\r\n     *\r\n     * Get the page author.\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getAuthor = function() { return `/**\r\n     * getAuthor\r\n     *\r\n     * Get the page author.\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "setAuthor",
			"doc": "/**\r\n     * setAuthor\r\n     *\r\n     * Save new page author.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newAuthor The new author value\r\n     */",
			"params": "newAuthor",
			"fn": "\nPage.prototype.setAuthor = function(newAuthor) { return `/**\r\n     * setAuthor\r\n     *\r\n     * Save new page author.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newAuthor The new author value\r\n     */`; };"
		},
		{
			"name": "getName",
			"doc": "/**\r\n     * getName\r\n     *\r\n     * Get the page name.\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getName = function() { return `/**\r\n     * getName\r\n     *\r\n     * Get the page name.\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "getImage1",
			"doc": "/**\r\n     * getImage1\r\n     *\r\n     * Get the image attachment filename.\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getImage1 = function() { return `/**\r\n     * getImage1\r\n     *\r\n     * Get the image attachment filename.\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "getImage2",
			"doc": "/**\r\n     * getImage2\r\n     *\r\n     * Get the image attachment filename.\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getImage2 = function() { return `/**\r\n     * getImage2\r\n     *\r\n     * Get the image attachment filename.\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "getFile1",
			"doc": "/**\r\n     * getFile1\r\n     *\r\n     * Get the file attachment filename.\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getFile1 = function() { return `/**\r\n     * getFile1\r\n     *\r\n     * Get the file attachment filename.\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "setName",
			"doc": "/**\r\n     * setName\r\n     *\r\n     * Save new page name.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newName The new page name\r\n     */",
			"params": "newName",
			"fn": "\nPage.prototype.setName = function(newName) { return `/**\r\n     * setName\r\n     *\r\n     * Save new page name.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newName The new page name\r\n     */`; };"
		},
		{
			"name": "getLinkAlt",
			"doc": "/**\r\n     * getLinkAlt\r\n     *\r\n     * Get link alt attribute.\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getLinkAlt = function() { return `/**\r\n     * getLinkAlt\r\n     *\r\n     * Get link alt attribute.\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "setLinkAlt",
			"doc": "/**\r\n     * setLinkAlt\r\n     *\r\n     * Save new link alt value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newLinkAlt The new link alt value\r\n     */",
			"params": "newLinkAlt",
			"fn": "\nPage.prototype.setLinkAlt = function(newLinkAlt) { return `/**\r\n     * setLinkAlt\r\n     *\r\n     * Save new link alt value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newLinkAlt The new link alt value\r\n     */`; };"
		},
		{
			"name": "getAction",
			"doc": "/**\r\n     * getAction\r\n     *\r\n     * Get page action type.\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getAction = function() { return `/**\r\n     * getAction\r\n     *\r\n     * Get page action type.\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "setAction",
			"doc": "/**\r\n     * setAction\r\n     *\r\n     * Save new page action type.\r\n     *\r\n     * @internal This is not for public consumption\r\n     * @param string $newAction The new page action type\r\n     */",
			"params": "newAction",
			"fn": "\nPage.prototype.setAction = function(newAction) { return `/**\r\n     * setAction\r\n     *\r\n     * Save new page action type.\r\n     *\r\n     * @internal This is not for public consumption\r\n     * @param string $newAction The new page action type\r\n     */`; };"
		},
		{
			"name": "getActionValue",
			"doc": "/**\r\n     * getActionValue\r\n     *\r\n     * Get the page action value.\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getActionValue = function() { return `/**\r\n     * getActionValue\r\n     *\r\n     * Get the page action value.\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "setActionValue",
			"doc": "/**\r\n     * setActionValue\r\n     *\r\n     * Save new page action value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newAction The new action value\r\n     */",
			"params": "newAction",
			"fn": "\nPage.prototype.setActionValue = function(newAction) { return `/**\r\n     * setActionValue\r\n     *\r\n     * Save new page action value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newAction The new action value\r\n     */`; };"
		},
		{
			"name": "getMetaDescription",
			"doc": "/**\r\n     * getMetaDescription\r\n     *\r\n     * Get the page meta description value.\r\n     *\r\n     * @return string The page meta description value\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getMetaDescription = function() { return `/**\r\n     * getMetaDescription\r\n     *\r\n     * Get the page meta description value.\r\n     *\r\n     * @return string The page meta description value\r\n     */`; };"
		},
		{
			"name": "setMetaDescription",
			"doc": "/**\r\n     * setMetaDescription\r\n     *\r\n     * Save new meta description value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newMetaDescription The new meta description value\r\n     */",
			"params": "newMetaDescription",
			"fn": "\nPage.prototype.setMetaDescription = function(newMetaDescription) { return `/**\r\n     * setMetaDescription\r\n     *\r\n     * Save new meta description value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newMetaDescription The new meta description value\r\n     */`; };"
		},
		{
			"name": "getMetaKeywords",
			"doc": "/**\r\n     * getMetaKeywords\r\n     *\r\n     * Get page meta keywords value.\r\n     *\r\n     * @return string The page meta keywords value\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getMetaKeywords = function() { return `/**\r\n     * getMetaKeywords\r\n     *\r\n     * Get page meta keywords value.\r\n     *\r\n     * @return string The page meta keywords value\r\n     */`; };"
		},
		{
			"name": "setMetaKeywords",
			"doc": "/**\r\n     * setMetaKeywords\r\n     *\r\n     * Save new meta keywords value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newMetaKeywords The new meta keywords value\r\n     */",
			"params": "newMetaKeywords",
			"fn": "\nPage.prototype.setMetaKeywords = function(newMetaKeywords) { return `/**\r\n     * setMetaKeywords\r\n     *\r\n     * Save new meta keywords value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newMetaKeywords The new meta keywords value\r\n     */`; };"
		},
		{
			"name": "getTitle",
			"doc": "/**\r\n     * getTitle\r\n     *\r\n     * Get the page meta title.\r\n     *\r\n     * @return string The page title value\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getTitle = function() { return `/**\r\n     * getTitle\r\n     *\r\n     * Get the page meta title.\r\n     *\r\n     * @return string The page title value\r\n     */`; };"
		},
		{
			"name": "setTitle",
			"doc": "/**\r\n     * setTitle\r\n     *\r\n     * Save new meta title.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newTitle The new meta title\r\n     */",
			"params": "newTitle",
			"fn": "\nPage.prototype.setTitle = function(newTitle) { return `/**\r\n     * setTitle\r\n     *\r\n     * Save new meta title.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newTitle The new meta title\r\n     */`; };"
		},
		{
			"name": "setTag",
			"doc": "/**\r\n     * setTag\r\n     *\r\n     * Set new tags.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $tag The new tags value\r\n     */",
			"params": "tag",
			"fn": "\nPage.prototype.setTag = function(tag) { return `/**\r\n     * setTag\r\n     *\r\n     * Set new tags.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $tag The new tags value\r\n     */`; };"
		},
		{
			"name": "setTitleTag",
			"doc": "/**\r\n     * setTitleTag\r\n     *\r\n     * Set new title tags.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $titleTag The new title tags value\r\n     */",
			"params": "titleTag",
			"fn": "\nPage.prototype.setTitleTag = function(titleTag) { return `/**\r\n     * setTitleTag\r\n     *\r\n     * Set new title tags.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $titleTag The new title tags value\r\n     */`; };"
		},
		{
			"name": "setAltTag",
			"doc": "/**\r\n     * setAltTag\r\n     *\r\n     * Save new page alt tags.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $altTag The new alt tag value\r\n     */",
			"params": "altTag",
			"fn": "\nPage.prototype.setAltTag = function(altTag) { return `/**\r\n     * setAltTag\r\n     *\r\n     * Save new page alt tags.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $altTag The new alt tag value\r\n     */`; };"
		},
		{
			"name": "getUrlName",
			"doc": "/**\r\n     * getUrlName\r\n     *\r\n     * Get the page permalink slug.\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getUrlName = function() { return `/**\r\n     * getUrlName\r\n     *\r\n     * Get the page permalink slug.\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "setUrlName",
			"doc": "/**\r\n     * setUrlName\r\n     *\r\n     * Save new permalink slug.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $url_name\r\n     */",
			"params": "url_name",
			"fn": "\nPage.prototype.setUrlName = function(url_name) { return `/**\r\n     * setUrlName\r\n     *\r\n     * Save new permalink slug.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $url_name\r\n     */`; };"
		},
		{
			"name": "getPermanentLink",
			"doc": "/**\r\n     * getPermanentLink\r\n     *\r\n     * Returns the page permanent link\r\n     *\r\n     * @param boolean $full\r\n     * @return string\r\n     */",
			"params": "full",
			"fn": "\nPage.prototype.getPermanentLink = function(full) { return `/**\r\n     * getPermanentLink\r\n     *\r\n     * Returns the page permanent link\r\n     *\r\n     * @param boolean $full\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "getContent",
			"doc": "/**\r\n     * getContent\r\n     *\r\n     * Get the page contents.\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getContent = function() { return `/**\r\n     * getContent\r\n     *\r\n     * Get the page contents.\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "setContent",
			"doc": "/**\r\n     * setContent\r\n     *\r\n     * Save new page contents.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newContent The new page contents\r\n     */",
			"params": "newContent",
			"fn": "\nPage.prototype.setContent = function(newContent) { return `/**\r\n     * setContent\r\n     *\r\n     * Save new page contents.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newContent The new page contents\r\n     */`; };"
		},
		{
			"name": "getStatus",
			"doc": "/**\r\n     * getStatus\r\n     *\r\n     * Get the page status.\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getStatus = function() { return `/**\r\n     * getStatus\r\n     *\r\n     * Get the page status.\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "setStatus",
			"doc": "/**\r\n     * setStatus\r\n     *\r\n     * Save new page status.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newStatus The new page status\r\n     */",
			"params": "newStatus",
			"fn": "\nPage.prototype.setStatus = function(newStatus) { return `/**\r\n     * setStatus\r\n     *\r\n     * Save new page status.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $newStatus The new page status\r\n     */`; };"
		},
		{
			"name": "getShow",
			"doc": "/**\r\n     * getShow\r\n     *\r\n     * Get show attribute value.\r\n     *\r\n     * @internal This needs to be verified\r\n     * @todo  Determine if this method is used or is safe to remove\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getShow = function() { return `/**\r\n     * getShow\r\n     *\r\n     * Get show attribute value.\r\n     *\r\n     * @internal This needs to be verified\r\n     * @todo  Determine if this method is used or is safe to remove\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "setShow",
			"doc": "/**\r\n     * setShow\r\n     *\r\n     * Publish the page.\r\n     *\r\n     * @internal This is not for public consumption\r\n     * @param string Publish field value\r\n     */",
			"params": "newShow",
			"fn": "\nPage.prototype.setShow = function(newShow) { return `/**\r\n     * setShow\r\n     *\r\n     * Publish the page.\r\n     *\r\n     * @internal This is not for public consumption\r\n     * @param string Publish field value\r\n     */`; };"
		},
		{
			"name": "getCreatedDate",
			"doc": "/**\r\n     * getCreatedDate\r\n     *\r\n     * Get the last modified date timestamp.\r\n     *\r\n     * @return integer\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getCreatedDate = function() { return `/**\r\n     * getCreatedDate\r\n     *\r\n     * Get the last modified date timestamp.\r\n     *\r\n     * @return integer\r\n     */`; };"
		},
		{
			"name": "getModifiedDate",
			"doc": "/**\r\n     * getModifiedDate\r\n     *\r\n     * Get the last modified date timestamp.\r\n     *\r\n     * @return integer\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getModifiedDate = function() { return `/**\r\n     * getModifiedDate\r\n     *\r\n     * Get the last modified date timestamp.\r\n     *\r\n     * @return integer\r\n     */`; };"
		},
		{
			"name": "setModifiedDate",
			"doc": "/**\r\n     * setModifiedDate\r\n     *\r\n     * Save new modified date value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param integer $newModifiedDate The new modified date value\r\n     */",
			"params": "newModifiedDate",
			"fn": "\nPage.prototype.setModifiedDate = function(newModifiedDate) { return `/**\r\n     * setModifiedDate\r\n     *\r\n     * Save new modified date value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param integer $newModifiedDate The new modified date value\r\n     */`; };"
		},
		{
			"name": "getStartDate",
			"doc": "/**\r\n     * getStartDate\r\n     *\r\n     * Get the page start date value.\r\n     *\r\n     * @internal This needs to be verified\r\n     * @todo Determine if this method is used or is safe to remove\r\n     * @return integer\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getStartDate = function() { return `/**\r\n     * getStartDate\r\n     *\r\n     * Get the page start date value.\r\n     *\r\n     * @internal This needs to be verified\r\n     * @todo Determine if this method is used or is safe to remove\r\n     * @return integer\r\n     */`; };"
		},
		{
			"name": "setStartDate",
			"doc": "/**\r\n     * setStartDate\r\n     *\r\n     * Save new page start date.\r\n     *\r\n     * @internal This needs to be verified\r\n     * @todo Determine if this method is used or is safe to remove\r\n     * @param integer $newStartDate The new start date value\r\n     */",
			"params": "newStartDate",
			"fn": "\nPage.prototype.setStartDate = function(newStartDate) { return `/**\r\n     * setStartDate\r\n     *\r\n     * Save new page start date.\r\n     *\r\n     * @internal This needs to be verified\r\n     * @todo Determine if this method is used or is safe to remove\r\n     * @param integer $newStartDate The new start date value\r\n     */`; };"
		},
		{
			"name": "getEndDate",
			"doc": "/**\r\n     * getEndDate\r\n     *\r\n     * Get the end date value.\r\n     *\r\n     * @return integer\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getEndDate = function() { return `/**\r\n     * getEndDate\r\n     *\r\n     * Get the end date value.\r\n     *\r\n     * @return integer\r\n     */`; };"
		},
		{
			"name": "setEndDate",
			"doc": "/**\r\n     * setEndDate\r\n     *\r\n     * Save new end date value.\r\n     *\r\n     * @internal This needs to be verified\r\n     * @todo Determine if this method is used or is safe to remove\r\n     * @param integer $newEndDate The new end date value.\r\n     */",
			"params": "newEndDate",
			"fn": "\nPage.prototype.setEndDate = function(newEndDate) { return `/**\r\n     * setEndDate\r\n     *\r\n     * Save new end date value.\r\n     *\r\n     * @internal This needs to be verified\r\n     * @todo Determine if this method is used or is safe to remove\r\n     * @param integer $newEndDate The new end date value.\r\n     */`; };"
		},
		{
			"name": "getOwner",
			"doc": "/**\r\n     * getOwner\r\n     *\r\n     * Get the page owner object.\r\n     *\r\n     * @return Authuser\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getOwner = function() { return `/**\r\n     * getOwner\r\n     *\r\n     * Get the page owner object.\r\n     *\r\n     * @return Authuser\r\n     */`; };"
		},
		{
			"name": "setOwner",
			"doc": "/**\r\n     * setOwner\r\n     *\r\n     * Save new page owner.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param User $user The owner user object.\r\n     */",
			"params": "user",
			"fn": "\nPage.prototype.setOwner = function(user) { return `/**\r\n     * setOwner\r\n     *\r\n     * Save new page owner.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param User $user The owner user object.\r\n     */`; };"
		},
		{
			"name": "getDefaultAccess",
			"doc": "/**\r\n     * getDefaultAccess\r\n     *\r\n     * Get page default access vlaue.\r\n     *\r\n     * @return integer\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getDefaultAccess = function() { return `/**\r\n     * getDefaultAccess\r\n     *\r\n     * Get page default access vlaue.\r\n     *\r\n     * @return integer\r\n     */`; };"
		},
		{
			"name": "setDefaultAccess",
			"doc": "/**\r\n     * setDefaultAccess\r\n     *\r\n     * Save new default access value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param integer The new access mode\r\n     */",
			"params": "mode",
			"fn": "\nPage.prototype.setDefaultAccess = function(mode) { return `/**\r\n     * setDefaultAccess\r\n     *\r\n     * Save new default access value.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param integer The new access mode\r\n     */`; };"
		},
		{
			"name": "inheritsAccess",
			"doc": "/**\r\n     * inheritsAccess\r\n     *\r\n     * Check if page inherits access from parent or not.\r\n     *\r\n     * @return integer\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.inheritsAccess = function() { return `/**\r\n     * inheritsAccess\r\n     *\r\n     * Check if page inherits access from parent or not.\r\n     *\r\n     * @return integer\r\n     */`; };"
		},
		{
			"name": "setInheritAccess",
			"doc": "/**\r\n     * setInheritAccess\r\n     *\r\n     * Save inherit access value.\r\n     *\r\n     * @internal  This is not for public consumption.\r\n     * @param integer $inheritAccess The inherit access value\r\n     */",
			"params": "inheritAccess",
			"fn": "\nPage.prototype.setInheritAccess = function(inheritAccess) { return `/**\r\n     * setInheritAccess\r\n     *\r\n     * Save inherit access value.\r\n     *\r\n     * @internal  This is not for public consumption.\r\n     * @param integer $inheritAccess The inherit access value\r\n     */`; };"
		},
		{
			"name": "getComment",
			"doc": "/**\r\n     * getComment\r\n     *\r\n     * Get page comments.\r\n     *\r\n     * @internal This needs to be verified\r\n     * @todo Determine if this method is used or is safe to remove\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getComment = function() { return `/**\r\n     * getComment\r\n     *\r\n     * Get page comments.\r\n     *\r\n     * @internal This needs to be verified\r\n     * @todo Determine if this method is used or is safe to remove\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "setComment",
			"doc": "/**\r\n     * setComment\r\n     *\r\n     * Save new page comment.\r\n     *\r\n     * @internal This needs to be verified\r\n     * @todo Determine if this method is used or is safe to remove\r\n     * @param  string $newComment The new comment value\r\n     * @return boolean\r\n     */",
			"params": "newComment",
			"fn": "\nPage.prototype.setComment = function(newComment) { return `/**\r\n     * setComment\r\n     *\r\n     * Save new page comment.\r\n     *\r\n     * @internal This needs to be verified\r\n     * @todo Determine if this method is used or is safe to remove\r\n     * @param  string $newComment The new comment value\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "isLocked",
			"doc": "/**\r\n     * isLocked\r\n     *\r\n     * Check if oage is locked.\r\n     * @return boolean\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.isLocked = function() { return `/**\r\n     * isLocked\r\n     *\r\n     * Check if oage is locked.\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "isRoot",
			"doc": "/**\r\n     * isRoot\r\n     *\r\n     * Determine if the page is the root page\r\n     *\r\n     * This assumes that a root page is a page with no parent ID\r\n     *\r\n     * @author Steven Manos, steven@bwired.com.au\r\n     *\r\n     * @return boolean\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.isRoot = function() { return `/**\r\n     * isRoot\r\n     *\r\n     * Determine if the page is the root page\r\n     *\r\n     * This assumes that a root page is a page with no parent ID\r\n     *\r\n     * @author Steven Manos, steven@bwired.com.au\r\n     *\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "getLockingUser",
			"doc": "/**\r\n     * getLockingUser\r\n     *\r\n     * Get the user object who locked the page.\r\n     *\r\n     * @return boolean|Authuser\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getLockingUser = function() { return `/**\r\n     * getLockingUser\r\n     *\r\n     * Get the user object who locked the page.\r\n     *\r\n     * @return boolean|Authuser\r\n     */`; };"
		},
		{
			"name": "getLockingUserID",
			"doc": "/**\r\n     * getLockingUserID\r\n     *\r\n     * Get the locking user's ID (for use with previous code)\r\n     *\r\n     * @author Steven Manos, steven@bwired.net.au\r\n     *\r\n     * @return int\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getLockingUserID = function() { return `/**\r\n     * getLockingUserID\r\n     *\r\n     * Get the locking user's ID (for use with previous code)\r\n     *\r\n     * @author Steven Manos, steven@bwired.net.au\r\n     *\r\n     * @return int\r\n     */`; };"
		},
		{
			"name": "getLockingUserName",
			"doc": "/**\r\n     * getLockingUserName\r\n     *\r\n     * Get the username of user who locked the page\r\n     *\r\n     * @return boolean|string\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getLockingUserName = function() { return `/**\r\n     * getLockingUserName\r\n     *\r\n     * Get the username of user who locked the page\r\n     *\r\n     * @return boolean|string\r\n     */`; };"
		},
		{
			"name": "getLockingUserEmail",
			"doc": "/**\r\n     * getLockingUserEmail\r\n     *\r\n     * Get the email of the user who locked the page.\r\n     *\r\n     * @return boolean|string\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getLockingUserEmail = function() { return `/**\r\n     * getLockingUserEmail\r\n     *\r\n     * Get the email of the user who locked the page.\r\n     *\r\n     * @return boolean|string\r\n     */`; };"
		},
		{
			"name": "setLocked",
			"doc": "/**\r\n     * setLocked\r\n     *\r\n     * Locks the page.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param boolean|User $falseOrUser The user who locks the page.\r\n     */",
			"params": "falseOrUser",
			"fn": "\nPage.prototype.setLocked = function(falseOrUser) { return `/**\r\n     * setLocked\r\n     *\r\n     * Locks the page.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param boolean|User $falseOrUser The user who locks the page.\r\n     */`; };"
		},
		{
			"name": "shift_indexes",
			"doc": "/**\r\n     * shift_indexes\r\n     *\r\n     * Moves the page index to desired index order.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param integer $start_index The starting index number\r\n     * @param string $direction The shifting direction\r\n     */",
			"params": "start_index, direction",
			"fn": "\nPage.prototype.shift_indexes = function(start_index, direction) { return `/**\r\n     * shift_indexes\r\n     *\r\n     * Moves the page index to desired index order.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param integer $start_index The starting index number\r\n     * @param string $direction The shifting direction\r\n     */`; };"
		},
		{
			"name": "shiftIndex",
			"doc": "/**\r\n     * shiftIndex\r\n     *\r\n     * Same with shift_indexes(), only difference is this function reindexes\r\n     * the page tree after the page is shifted.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $direction The shifting direction\r\n     */",
			"params": "direction",
			"fn": "\nPage.prototype.shiftIndex = function(direction) { return `/**\r\n     * shiftIndex\r\n     *\r\n     * Same with shift_indexes(), only difference is this function reindexes\r\n     * the page tree after the page is shifted.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param string $direction The shifting direction\r\n     */`; };"
		},
		{
			"name": "getSubPages",
			"doc": "/**\r\n     * getSubPages\r\n     *\r\n     * Get the subpages of current page. If $admin parameter is set to true, the\r\n     * function will return all pages regardless if published or expired. This\r\n     * function method does not validate the user access to pages.\r\n     *\r\n     * @param  boolean $admin If function is accessed in admin environment.\r\n     * @param  boolean $recursive If getting the subpages recusively.\r\n     * @return array\r\n     */",
			"params": "admin, recursive",
			"fn": "\nPage.prototype.getSubPages = function(admin, recursive) { return `/**\r\n     * getSubPages\r\n     *\r\n     * Get the subpages of current page. If $admin parameter is set to true, the\r\n     * function will return all pages regardless if published or expired. This\r\n     * function method does not validate the user access to pages.\r\n     *\r\n     * @param  boolean $admin If function is accessed in admin environment.\r\n     * @param  boolean $recursive If getting the subpages recusively.\r\n     * @return array\r\n     */`; };"
		},
		{
			"name": "getSubPagesSecure",
			"doc": "/**\r\n     * getSubPagesSecure\r\n     *\r\n     * Get the subpages of current page where the $user has access to.\r\n     *\r\n     * @param  Pubuser &$user This is required, the user who access the pages records\r\n     * @param  boolean $recursive Determine if getting subpages recusively\r\n     * @param  boolean $inmenu Whether the page should be displayed in menu under publish settings or whether we don't care\r\n     * @return array\r\n     */",
			"params": "user, recursive, inmenu",
			"fn": "\nPage.prototype.getSubPagesSecure = function(user, recursive, inmenu) { return `/**\r\n     * getSubPagesSecure\r\n     *\r\n     * Get the subpages of current page where the $user has access to.\r\n     *\r\n     * @param  Pubuser &$user This is required, the user who access the pages records\r\n     * @param  boolean $recursive Determine if getting subpages recusively\r\n     * @param  boolean $inmenu Whether the page should be displayed in menu under publish settings or whether we don't care\r\n     * @return array\r\n     */`; };"
		},
		{
			"name": "getSubPage",
			"doc": "/**\r\n     * getSubPage\r\n     *\r\n     * Get the first subpage.\r\n     *\r\n     * @return Page\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getSubPage = function() { return `/**\r\n     * getSubPage\r\n     *\r\n     * Get the first subpage.\r\n     *\r\n     * @return Page\r\n     */`; };"
		},
		{
			"name": "remove",
			"doc": "/**\r\n     * remove\r\n     *\r\n     * Remove the page object.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.remove = function() { return `/**\r\n     * remove\r\n     *\r\n     * Remove the page object.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     */`; };"
		},
		{
			"name": "movePageTo",
			"doc": "/**\r\n     * movePageTo\r\n     *\r\n     * Move the page to new parent page.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param integer $new_parent_id The target parent page id\r\n     */",
			"params": "new_parent_id",
			"fn": "\nPage.prototype.movePageTo = function(new_parent_id) { return `/**\r\n     * movePageTo\r\n     *\r\n     * Move the page to new parent page.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param integer $new_parent_id The target parent page id\r\n     */`; };"
		},
		{
			"name": "reindex",
			"doc": "/**\r\n     * reindex\r\n     *\r\n     * Reindex the page tree.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.reindex = function() { return `/**\r\n     * reindex\r\n     *\r\n     * Reindex the page tree.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     */`; };"
		},
		{
			"name": "reindexTree",
			"doc": "/**\r\n     * reindexTree\r\n     *\r\n     * Reindex the page tree.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @todo Remove the function parameters since it is not being used at the moment\r\n     */",
			"params": "merchant_id, parent_id, index",
			"fn": "\nPage.prototype.reindexTree = function(merchant_id, parent_id, index) { return `/**\r\n     * reindexTree\r\n     *\r\n     * Reindex the page tree.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @todo Remove the function parameters since it is not being used at the moment\r\n     */`; };"
		},
		{
			"name": "getPath",
			"doc": "/**\r\n     * getPath\r\n     *\r\n     * This function utilizes the method getPath_r(). Get the page path in\r\n     * the page tree leading to the current page id.\r\n     * eg. Root->Page1->CurrentPage\r\n     *\r\n     * @return array\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getPath = function() { return `/**\r\n     * getPath\r\n     *\r\n     * This function utilizes the method getPath_r(). Get the page path in\r\n     * the page tree leading to the current page id.\r\n     * eg. Root->Page1->CurrentPage\r\n     *\r\n     * @return array\r\n     */`; };"
		},
		{
			"name": "getPath_r",
			"doc": "/**\r\n     * getPath\r\n     *\r\n     * Get the page path in the page tree leading to the desired page id.\r\n     * eg. Root->Page1->DesiredPageId\r\n     *\r\n     * @param  integer $id The bottom page id in the tree.\r\n     * @return array\r\n     */",
			"params": "id, path",
			"fn": "\nPage.prototype.getPath_r = function(id, path) { return `/**\r\n     * getPath\r\n     *\r\n     * Get the page path in the page tree leading to the desired page id.\r\n     * eg. Root->Page1->DesiredPageId\r\n     *\r\n     * @param  integer $id The bottom page id in the tree.\r\n     * @return array\r\n     */`; };"
		},
		{
			"name": "getPageIndex",
			"doc": "/**\r\n     * getPageIndex\r\n     *\r\n     * Get the page id's index number.\r\n     *\r\n     * @param  integer $page_id The page id to check.\r\n     * @return integer\r\n     */",
			"params": "page_id",
			"fn": "\nPage.prototype.getPageIndex = function(page_id) { return `/**\r\n     * getPageIndex\r\n     *\r\n     * Get the page id's index number.\r\n     *\r\n     * @param  integer $page_id The page id to check.\r\n     * @return integer\r\n     */`; };"
		},
		{
			"name": "createOptions",
			"doc": "/**\r\n     * createOptions\r\n     *\r\n     * Create options array for page option dropdowns. Starts from root page.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param  boolean $admin Determine if accessing in admin environment\r\n     * @return array\r\n     */",
			"params": "admin",
			"fn": "\nPage.prototype.createOptions = function(admin) { return `/**\r\n     * createOptions\r\n     *\r\n     * Create options array for page option dropdowns. Starts from root page.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param  boolean $admin Determine if accessing in admin environment\r\n     * @return array\r\n     */`; };"
		},
		{
			"name": "createOptionsArray",
			"doc": "/**\r\n     * createOptionsArray\r\n     *\r\n     * Create options array for page option dropdowns.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param  Page $page The starting page\r\n     * @param  array $array Contains the output array\r\n     * @param  boolean $admin Determine if accessing in admin environment\r\n     * @return array\r\n     */",
			"params": "page, array, admin",
			"fn": "\nPage.prototype.createOptionsArray = function(page, array, admin) { return `/**\r\n     * createOptionsArray\r\n     *\r\n     * Create options array for page option dropdowns.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @param  Page $page The starting page\r\n     * @param  array $array Contains the output array\r\n     * @param  boolean $admin Determine if accessing in admin environment\r\n     * @return array\r\n     */`; };"
		},
		{
			"name": "getAvailableActions",
			"doc": "/**\r\n     * getAvailableActions\r\n     *\r\n     * Get the available page actions in db.\r\n     *\r\n     * @internal  This needs to be verified\r\n     * @todo  Determine if this field is used or is safe to remove\r\n     * @return array\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getAvailableActions = function() { return `/**\r\n     * getAvailableActions\r\n     *\r\n     * Get the available page actions in db.\r\n     *\r\n     * @internal  This needs to be verified\r\n     * @todo  Determine if this field is used or is safe to remove\r\n     * @return array\r\n     */`; };"
		},
		{
			"name": "approve",
			"doc": "/**\r\n     * approve\r\n     *\r\n     * Approve the current page object.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @return boolean\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.approve = function() { return `/**\r\n     * approve\r\n     *\r\n     * Approve the current page object.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "putOnPulldown",
			"doc": "/**\r\n     * putOnPulldown\r\n     *\r\n     * Set this to appear on the pulldown list. A bit of a hack, and currently\r\n     * only called from my page_copy function\r\n     *\r\n     * @internal  This is not for public consumption\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     * @author Steven Manos, steven@bwired.net.au\r\n     *\r\n     * @deprecated since ver 0.2 because of policy\r\n     *\r\n     * @return boolean Updated or not\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.putOnPulldown = function() { return `/**\r\n     * putOnPulldown\r\n     *\r\n     * Set this to appear on the pulldown list. A bit of a hack, and currently\r\n     * only called from my page_copy function\r\n     *\r\n     * @internal  This is not for public consumption\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     *\r\n     * @author Steven Manos, steven@bwired.net.au\r\n     *\r\n     * @deprecated since ver 0.2 because of policy\r\n     *\r\n     * @return boolean Updated or not\r\n     */`; };"
		},
		{
			"name": "publish",
			"doc": "/**\r\n     * publish\r\n     *\r\n     * Publish the page.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @return boolean\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.publish = function() { return `/**\r\n     * publish\r\n     *\r\n     * Publish the page.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "archive",
			"doc": "/**\r\n     * archive\r\n     *\r\n     * Archive the page.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @return boolean\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.archive = function() { return `/**\r\n     * archive\r\n     *\r\n     * Archive the page.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "recycle",
			"doc": "/**\r\n     * recycle\r\n     *\r\n     * Set page status to `for approval`\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @return boolean\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.recycle = function() { return `/**\r\n     * recycle\r\n     *\r\n     * Set page status to 'for approval'\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "getContentByID",
			"doc": "/**\r\n     * getContentByID\r\n     *\r\n     * Get page content by page id.\r\n     *\r\n     * @param  integer $id The page id\r\n     * @return string  The page content\r\n     */",
			"params": "id",
			"fn": "\nPage.prototype.getContentByID = function(id) { return `/**\r\n     * getContentByID\r\n     *\r\n     * Get page content by page id.\r\n     *\r\n     * @param  integer $id The page id\r\n     * @return string  The page content\r\n     */`; };"
		},
		{
			"name": "removeContent",
			"doc": "/**\r\n     * removeContent\r\n     *\r\n     * Deletes the page content.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @return boolean\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.removeContent = function() { return `/**\r\n     * removeContent\r\n     *\r\n     * Deletes the page content.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "getOrderList",
			"doc": "/**\r\n     * getOrderList\r\n     *\r\n     * Retrurns the subpages of parent page.\r\n     *\r\n     * @see CoreDNA_Orderable\r\n     *\r\n     * @return array\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getOrderList = function() { return `/**\r\n     * getOrderList\r\n     *\r\n     * Retrurns the subpages of parent page.\r\n     *\r\n     * @see CoreDNA_Orderable\r\n     *\r\n     * @return array\r\n     */`; };"
		},
		{
			"name": "getOrder",
			"doc": "/**\r\n     * getOrder\r\n     *\r\n     * Get the page index number.\r\n     *\r\n     * @see  CoreDNA_Orderable\r\n     *\r\n     * @return integer\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getOrder = function() { return `/**\r\n     * getOrder\r\n     *\r\n     * Get the page index number.\r\n     *\r\n     * @see  CoreDNA_Orderable\r\n     *\r\n     * @return integer\r\n     */`; };"
		},
		{
			"name": "setOrder",
			"doc": "/**\r\n     * setOrder\r\n     *\r\n     * Save page index number.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     *\r\n     * @see  CoreDNA_Orderable\r\n     *\r\n     * @param integer $order The page index number\r\n     */",
			"params": "order",
			"fn": "\nPage.prototype.setOrder = function(order) { return `/**\r\n     * setOrder\r\n     *\r\n     * Save page index number.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     *\r\n     * @see  CoreDNA_Orderable\r\n     *\r\n     * @param integer $order The page index number\r\n     */`; };"
		},
		{
			"name": "moveTo",
			"doc": "/**\r\n     * moveTo\r\n     *\r\n     * Move the page to specific index number.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     *\r\n     * @see  CoreDNA_Order::moveTo\r\n     *\r\n     * @param integer $order The new page index number\r\n     */",
			"params": "order",
			"fn": "\nPage.prototype.moveTo = function(order) { return `/**\r\n     * moveTo\r\n     *\r\n     * Move the page to specific index number.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     *\r\n     * @see  CoreDNA_Order::moveTo\r\n     *\r\n     * @param integer $order The new page index number\r\n     */`; };"
		},
		{
			"name": "moveUp",
			"doc": "/**\r\n     * moveUp\r\n     *\r\n     * Moves the page up in the pages order.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @see CoreDNA_Order::moveUp\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.moveUp = function() { return `/**\r\n     * moveUp\r\n     *\r\n     * Moves the page up in the pages order.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @see CoreDNA_Order::moveUp\r\n     */`; };"
		},
		{
			"name": "moveDown",
			"doc": "/**\r\n     * moveDown\r\n     *\r\n     * Moves the page down in the pages order.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @see  CoreDNA_Order::moveDown\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.moveDown = function() { return `/**\r\n     * moveDown\r\n     *\r\n     * Moves the page down in the pages order.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @see  CoreDNA_Order::moveDown\r\n     */`; };"
		},
		{
			"name": "getMeta",
			"doc": "/**\r\n     * getMeta\r\n     *\r\n     * Get the page meta object.\r\n     *\r\n     * @param  string $field The specific page meta field\r\n     * @return string|Meta\r\n     */",
			"params": "field",
			"fn": "\nPage.prototype.getMeta = function(field) { return `/**\r\n     * getMeta\r\n     *\r\n     * Get the page meta object.\r\n     *\r\n     * @param  string $field The specific page meta field\r\n     * @return string|Meta\r\n     */`; };"
		},
		{
			"name": "setMetaData",
			"doc": "/**\r\n     * setMetaData\r\n     *\r\n     * Save page metadata values.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @see  Meta\r\n     */",
			"params": "args",
			"fn": "\nPage.prototype.setMetaData = function(args) { return `/**\r\n     * setMetaData\r\n     *\r\n     * Save page metadata values.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @see  Meta\r\n     */`; };"
		},
		{
			"name": "deleteModuleCache",
			"doc": "/**\r\n     * deleteModuleCache\r\n     *\r\n     * Delete page module cache values.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @see  CoreDNA_Cache::deleteModuleCache\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.deleteModuleCache = function() { return `/**\r\n     * deleteModuleCache\r\n     *\r\n     * Delete page module cache values.\r\n     *\r\n     * @internal  This is not for public consumption\r\n     * @see  CoreDNA_Cache::deleteModuleCache\r\n     */`; };"
		},
		{
			"name": "getCustomFields",
			"doc": "/**\r\n     * @return array returns the associate array of field names and its values\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getCustomFields = function() { return `/**\r\n     * @return array returns the associate array of field names and its values\r\n     */`; };"
		},
		{
			"name": "getCustomFieldByName",
			"doc": "/**\r\n     * @param  string $field_name\r\n     * @return mixed\r\n     */",
			"params": "field_name",
			"fn": "\nPage.prototype.getCustomFieldByName = function(field_name) { return `/**\r\n     * @param  string $field_name\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getCustomFiles",
			"doc": "/**\r\n     * Get custom files with their full paths\r\n     *\r\n     * @return array\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getCustomFiles = function() { return `/**\r\n     * Get custom files with their full paths\r\n     *\r\n     * @return array\r\n     */`; };"
		},
		{
			"name": "getAssets",
			"doc": "/**\r\n     * getAssets\r\n     *\r\n     * Returns the array of assets\r\n     *\r\n     * @return array\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getAssets = function() { return `/**\r\n     * getAssets\r\n     *\r\n     * Returns the array of assets\r\n     *\r\n     * @return array\r\n     */`; };"
		},
		{
			"name": "getLayoutFile",
			"doc": "/**\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPage.prototype.getLayoutFile = function() { return `/**\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "getUse",
			"doc": false,
			"params": "",
			"fn": "\nPage.prototype.getUse = function() { return ``; };"
		},
		{
			"name": "getInheritAttachments",
			"doc": false,
			"params": "",
			"fn": "\nPage.prototype.getInheritAttachments = function() { return ``; };"
		},
		{
			"name": "setInheritAttachments",
			"doc": false,
			"params": "value",
			"fn": "\nPage.prototype.setInheritAttachments = function(value) { return ``; };"
		},
		{
			"name": "getInheritLinkedContent",
			"doc": false,
			"params": "",
			"fn": "\nPage.prototype.getInheritLinkedContent = function() { return ``; };"
		},
		{
			"name": "setInheritLinkedContent",
			"doc": false,
			"params": "value",
			"fn": "\nPage.prototype.setInheritLinkedContent = function(value) { return ``; };"
		},
		{
			"name": "getAttachments",
			"doc": "/**\r\n     * Get page attachments with optional category check\r\n     *\r\n     * @param  string $categoryId\r\n     * @return array\r\n     */",
			"params": "categoryId",
			"fn": "\nPage.prototype.getAttachments = function(categoryId) { return `/**\r\n     * Get page attachments with optional category check\r\n     *\r\n     * @param  string $categoryId\r\n     * @return array\r\n     */`; };"
		},
		{
			"name": "searchAttachmentsByCategory",
			"doc": "/**\r\n     * Get page attachments by category name\r\n     *\r\n     * @param string $category The category name or part of it\r\n     * @return array An array of PageAttachment objects\r\n     */",
			"params": "category",
			"fn": "\nPage.prototype.searchAttachmentsByCategory = function(category) { return `/**\r\n     * Get page attachments by category name\r\n     *\r\n     * @param string $category The category name or part of it\r\n     * @return array An array of PageAttachment objects\r\n     */`; };"
		},
		{
			"name": "getLinkedContent",
			"doc": "/**\r\n     * @param null $order\r\n     * @param null $offset\r\n     * @param $limit\r\n     * @return bool\r\n     */",
			"params": "order, offset, limit",
			"fn": "\nPage.prototype.getLinkedContent = function(order, offset, limit) { return `/**\r\n     * @param null $order\r\n     * @param null $offset\r\n     * @param $limit\r\n     * @return bool\r\n     */`; };"
		},
		{
			"name": "getBlueprintId",
			"doc": false,
			"params": "",
			"fn": "\nPage.prototype.getBlueprintId = function() { return ``; };"
		},
		{
			"name": "setPreview",
			"doc": false,
			"params": "value",
			"fn": "\nPage.prototype.setPreview = function(value) { return ``; };"
		},
		{
			"name": "getPreview",
			"doc": false,
			"params": "",
			"fn": "\nPage.prototype.getPreview = function() { return ``; };"
		},
		{
			"name": "getTruncatedContent",
			"doc": "/**\r\n     * Get a truncated portion of the content\r\n     *\r\n     * @param int $length The length to start truncating at\r\n     * @param string $strategy How to approach the truncation can be 'exact', 'word' or 'sentence', exact is assumed\r\n     * @param string $direction Which direction to truncate when using nearest or sentence, can be 'less', 'more' or 'auto', auto is assumed\r\n     *\r\n     * @return string\r\n     */",
			"params": "length, strategy, direction",
			"fn": "\nPage.prototype.getTruncatedContent = function(length, strategy, direction) { return `/**\r\n     * Get a truncated portion of the content\r\n     *\r\n     * @param int $length The length to start truncating at\r\n     * @param string $strategy How to approach the truncation can be 'exact', 'word' or 'sentence', exact is assumed\r\n     * @param string $direction Which direction to truncate when using nearest or sentence, can be 'less', 'more' or 'auto', auto is assumed\r\n     *\r\n     * @return string\r\n     */`; };"
		}
	],
	"CentreRegionalisation": [
		{
			"name": "__construct",
			"doc": "/**\n     * Constructor of the class.\n     * Initializes the object with the settings given.\n     *\n     * @param array $settings the settings of this object\n     */",
			"params": "settings",
			"fn": "\nCentreRegionalisation.prototype.__construct = function(settings) { return `/**\n     * Constructor of the class.\n     * Initializes the object with the settings given.\n     *\n     * @param array $settings the settings of this object\n     */`; };"
		},
		{
			"name": "setSettings",
			"doc": "/**\n     * Set the current settings to the one passed\n     *\n     * @param array $settings New Settings\n     */",
			"params": "settings",
			"fn": "\nCentreRegionalisation.prototype.setSettings = function(settings) { return `/**\n     * Set the current settings to the one passed\n     *\n     * @param array $settings New Settings\n     */`; };"
		},
		{
			"name": "setColumnValue",
			"doc": "/**\n     * Updates the $column attribute\n     *\n     * @param string $column_name The Column to Update\n     * @param string $value The value of the column\n     */",
			"params": "column_name, value",
			"fn": "\nCentreRegionalisation.prototype.setColumnValue = function(column_name, value) { return `/**\n     * Updates the $column attribute\n     *\n     * @param string $column_name The Column to Update\n     * @param string $value The value of the column\n     */`; };"
		},
		{
			"name": "getId",
			"doc": "/**\n     * Gets the ID of this object\n     *\n     * @return int\n     */",
			"params": "",
			"fn": "\nCentreRegionalisation.prototype.getId = function() { return `/**\n     * Gets the ID of this object\n     *\n     * @return int\n     */`; };"
		},
		{
			"name": "setId",
			"doc": "/**\n     * Sets the ID of this object.\n     * This is private since the id should not be modified by\n     * outside operations. This should be pulled from the DB.\n     *\n     * @param  int $id Unique Identifier of this object\n     * @return void\n     */",
			"params": "id",
			"fn": "\nCentreRegionalisation.prototype.setId = function(id) { return `/**\n     * Sets the ID of this object.\n     * This is private since the id should not be modified by\n     * outside operations. This should be pulled from the DB.\n     *\n     * @param  int $id Unique Identifier of this object\n     * @return void\n     */`; };"
		},
		{
			"name": "getCentreId",
			"doc": "/**\n     * Gets the centre id this setting is relating to.\n     *\n     * @return int\n     */",
			"params": "",
			"fn": "\nCentreRegionalisation.prototype.getCentreId = function() { return `/**\n     * Gets the centre id this setting is relating to.\n     *\n     * @return int\n     */`; };"
		},
		{
			"name": "setCentreId",
			"doc": "/**\n     * Sets the centre id this setting is relating to.\n     *\n     * @param int $centre_id Unique Identifier of this object\n     */",
			"params": "centre_id",
			"fn": "\nCentreRegionalisation.prototype.setCentreId = function(centre_id) { return `/**\n     * Sets the centre id this setting is relating to.\n     *\n     * @param int $centre_id Unique Identifier of this object\n     */`; };"
		},
		{
			"name": "getTimestamp",
			"doc": "/**\n     * Get's the creation date of this object.\n     *\n     * @return string\n     */",
			"params": "",
			"fn": "\nCentreRegionalisation.prototype.getTimestamp = function() { return `/**\n     * Get's the creation date of this object.\n     *\n     * @return string\n     */`; };"
		},
		{
			"name": "setTimestamp",
			"doc": "/**\n     * Sets the creation date of this object.\n     * This is private since this should not be allowed to\n     * be modified.\n     *\n     * @param string $timestamp The new timestamp\n     */",
			"params": "timestamp",
			"fn": "\nCentreRegionalisation.prototype.setTimestamp = function(timestamp) { return `/**\n     * Sets the creation date of this object.\n     * This is private since this should not be allowed to\n     * be modified.\n     *\n     * @param string $timestamp The new timestamp\n     */`; };"
		},
		{
			"name": "getCurrencyFormat",
			"doc": "/**\n     * Gets the current currency format\n     *\n     * @param  boolean $array_format Returns the parts as array if true, returns the whole string if false.\n     * @return string|array\n     */",
			"params": "array_format",
			"fn": "\nCentreRegionalisation.prototype.getCurrencyFormat = function(array_format) { return `/**\n     * Gets the current currency format\n     *\n     * @param  boolean $array_format Returns the parts as array if true, returns the whole string if false.\n     * @return string|array\n     */`; };"
		},
		{
			"name": "setCurrencyFormat",
			"doc": "/**\n     * Sets the current Currency Format.\n     * The format should be %<thousand_separator>%<decimal_separator>%<decimal_digit_count>.\n     * If parameters are incorrect, then use default values.\n     *\n     * @param string $newFormat The new format\n     */",
			"params": "newFormat",
			"fn": "\nCentreRegionalisation.prototype.setCurrencyFormat = function(newFormat) { return `/**\n     * Sets the current Currency Format.\n     * The format should be %<thousand_separator>%<decimal_separator>%<decimal_digit_count>.\n     * If parameters are incorrect, then use default values.\n     *\n     * @param string $newFormat The new format\n     */`; };"
		},
		{
			"name": "getCurrencyCode",
			"doc": "/**\n     * Get the current Currency Code\n     *\n     * @return string\n     */",
			"params": "",
			"fn": "\nCentreRegionalisation.prototype.getCurrencyCode = function() { return `/**\n     * Get the current Currency Code\n     *\n     * @return string\n     */`; };"
		},
		{
			"name": "setCurrencyCode",
			"doc": "/**\n     * Sets the currency code.\n     *\n     * @param string $code The new code.\n     */",
			"params": "code",
			"fn": "\nCentreRegionalisation.prototype.setCurrencyCode = function(code) { return `/**\n     * Sets the currency code.\n     *\n     * @param string $code The new code.\n     */`; };"
		},
		{
			"name": "getCurrencySymbol",
			"doc": "/**\n     * Gets the current currency symbol.\n     *\n     * @return string\n     */",
			"params": "",
			"fn": "\nCentreRegionalisation.prototype.getCurrencySymbol = function() { return `/**\n     * Gets the current currency symbol.\n     *\n     * @return string\n     */`; };"
		},
		{
			"name": "setCurrencySymbol",
			"doc": "/**\n     * Sets the currency symbol.\n     *\n     * @param string $symbol The new Currency Symbol\n     */",
			"params": "symbol",
			"fn": "\nCentreRegionalisation.prototype.setCurrencySymbol = function(symbol) { return `/**\n     * Sets the currency symbol.\n     *\n     * @param string $symbol The new Currency Symbol\n     */`; };"
		},
		{
			"name": "useCurrencySymbol",
			"doc": "/**\n     * Checks or sets the currency symbol.\n     * If the status is not specified, then it checks if the class should use the currency symbol\n     * Otherwise it sets it to a new value $status\n     *\n     * @param  string $status The status of the currency symbol.\n     * @return void|boolean\n     */",
			"params": "status",
			"fn": "\nCentreRegionalisation.prototype.useCurrencySymbol = function(status) { return `/**\n     * Checks or sets the currency symbol.\n     * If the status is not specified, then it checks if the class should use the currency symbol\n     * Otherwise it sets it to a new value $status\n     *\n     * @param  string $status The status of the currency symbol.\n     * @return void|boolean\n     */`; };"
		},
		{
			"name": "getDateFormat",
			"doc": "/**\n     * Gets the current date format.\n     * If the $with_time is true, then it will also include the time.\n     *\n     * @param boolean $with_time Indicator whether to add the time or not.\n     * @param boolean $datepicker If set, returns a jquery Datepicker compatible format\n     * @return string\n     */",
			"params": "with_time, datepicker",
			"fn": "\nCentreRegionalisation.prototype.getDateFormat = function(with_time, datepicker) { return `/**\n     * Gets the current date format.\n     * If the $with_time is true, then it will also include the time.\n     *\n     * @param boolean $with_time Indicator whether to add the time or not.\n     * @param boolean $datepicker If set, returns a jquery Datepicker compatible format\n     * @return string\n     */`; };"
		},
		{
			"name": "setDateFormat",
			"doc": "/**\n     * Sets the date format.\n     * If $time_format is present, it also sets the time format.\n     *\n     * @param  string $date_format Date format\n     * @param  string $time_format Time format\n     * @return void\n     */",
			"params": "date_format, time_format",
			"fn": "\nCentreRegionalisation.prototype.setDateFormat = function(date_format, time_format) { return `/**\n     * Sets the date format.\n     * If $time_format is present, it also sets the time format.\n     *\n     * @param  string $date_format Date format\n     * @param  string $time_format Time format\n     * @return void\n     */`; };"
		},
		{
			"name": "getTimeFormat",
			"doc": "/**\n     * Gets the current time format.\n     *\n     * @param boolean $datepicker If set, returns a jquery Timepicker compatible format\n     * @return string\n     */",
			"params": "timepicker",
			"fn": "\nCentreRegionalisation.prototype.getTimeFormat = function(timepicker) { return `/**\n     * Gets the current time format.\n     *\n     * @param boolean $datepicker If set, returns a jquery Timepicker compatible format\n     * @return string\n     */`; };"
		},
		{
			"name": "setTimeFormat",
			"doc": "/**\n     * Sets the time format.\n     *\n     * @param  string $format Time format\n     * @return void\n     */",
			"params": "format",
			"fn": "\nCentreRegionalisation.prototype.setTimeFormat = function(format) { return `/**\n     * Sets the time format.\n     *\n     * @param  string $format Time format\n     * @return void\n     */`; };"
		},
		{
			"name": "getDimensionAndWeightUnits",
			"doc": "/**\n     * Gets the current dimension and weight units.\n     * If $array_format is true then return the fields as array\n     * Otherwise, combine then and return the string value.\n     *\n     * @param  boolean $array_format Return array format or not\n     * @return array|string\n     */",
			"params": "array_format",
			"fn": "\nCentreRegionalisation.prototype.getDimensionAndWeightUnits = function(array_format) { return `/**\n     * Gets the current dimension and weight units.\n     * If $array_format is true then return the fields as array\n     * Otherwise, combine then and return the string value.\n     *\n     * @param  boolean $array_format Return array format or not\n     * @return array|string\n     */`; };"
		},
		{
			"name": "setDimensionAndWeightUnits",
			"doc": "/**\n     * Sets the dimension and weight units.\n     * The format of $units should be <dimension>/<weight>.\n     * If format is invalid, the use the default.\n     *\n     * @param  string $units Dimension and weight units\n     * @return void\n     */",
			"params": "units",
			"fn": "\nCentreRegionalisation.prototype.setDimensionAndWeightUnits = function(units) { return `/**\n     * Sets the dimension and weight units.\n     * The format of $units should be <dimension>/<weight>.\n     * If format is invalid, the use the default.\n     *\n     * @param  string $units Dimension and weight units\n     * @return void\n     */`; };"
		},
		{
			"name": "getWeightUnit",
			"doc": "/**\n     * Gets the current weight unit.\n     *\n     * @return string\n     */",
			"params": "",
			"fn": "\nCentreRegionalisation.prototype.getWeightUnit = function() { return `/**\n     * Gets the current weight unit.\n     *\n     * @return string\n     */`; };"
		},
		{
			"name": "getDimensionUnit",
			"doc": "/**\n     * Gets the current dimension unit.\n     *\n     * @return string\n     */",
			"params": "",
			"fn": "\nCentreRegionalisation.prototype.getDimensionUnit = function() { return `/**\n     * Gets the current dimension unit.\n     *\n     * @return string\n     */`; };"
		},
		{
			"name": "getTimeZone",
			"doc": "/**\n     * Gets the current timezone.\n     *\n     * @return string\n     */",
			"params": "",
			"fn": "\nCentreRegionalisation.prototype.getTimeZone = function() { return `/**\n     * Gets the current timezone.\n     *\n     * @return string\n     */`; };"
		},
		{
			"name": "setTimeZone",
			"doc": "/**\n     * Sets the timezone.\n     *\n     * @param  string $timezone New Timezone\n     * @return void\n     */",
			"params": "timezone",
			"fn": "\nCentreRegionalisation.prototype.setTimeZone = function(timezone) { return `/**\n     * Sets the timezone.\n     *\n     * @param  string $timezone New Timezone\n     * @return void\n     */`; };"
		},
		{
			"name": "changeTimeZoneNow",
			"doc": "/**\n     * Changes the Timezone.\n     *\n     * If $new_timezone is not set then the current timezone will be used.\n     *\n     * @param  string $new_timezone New Timezone\n     * @return void\n     */",
			"params": "new_timezone",
			"fn": "\nCentreRegionalisation.prototype.changeTimeZoneNow = function(new_timezone) { return `/**\n     * Changes the Timezone.\n     *\n     * If $new_timezone is not set then the current timezone will be used.\n     *\n     * @param  string $new_timezone New Timezone\n     * @return void\n     */`; };"
		},
		{
			"name": "formatCurrency",
			"doc": "/**\n     * Formats $value based on the current format.\n     *\n     * @param  string $value Currency value\n     * @return string\n     */",
			"params": "value",
			"fn": "\nCentreRegionalisation.prototype.formatCurrency = function(value) { return `/**\n     * Formats $value based on the current format.\n     *\n     * @param  string $value Currency value\n     * @return string\n     */`; };"
		},
		{
			"name": "formatDate",
			"doc": "/**\n     * Formats $date based on the current format.\n     * If $with_time is set to true then also include the time.\n     *\n     * @param  string $date Date value.\n     * @param  boolean $with_time Add the time or not.\n     * @return string\n     */",
			"params": "date, with_time",
			"fn": "\nCentreRegionalisation.prototype.formatDate = function(date, with_time) { return `/**\n     * Formats $date based on the current format.\n     * If $with_time is set to true then also include the time.\n     *\n     * @param  string $date Date value.\n     * @param  boolean $with_time Add the time or not.\n     * @return string\n     */`; };"
		},
		{
			"name": "formatTime",
			"doc": "/**\n     * Formats $time based on the current format.\n     *\n     * @param  string $time Time value.\n     * @return string\n     */",
			"params": "time",
			"fn": "\nCentreRegionalisation.prototype.formatTime = function(time) { return `/**\n     * Formats $time based on the current format.\n     *\n     * @param  string $time Time value.\n     * @return string\n     */`; };"
		},
		{
			"name": "convertDateToDBFormat",
			"doc": "/**\n     * Converts a date/time string to a DB compatible string\n     *\n     * @param string $date\n     * @return string\n     * @throws Exception\n     */",
			"params": "date",
			"fn": "\nCentreRegionalisation.prototype.convertDateToDBFormat = function(date) { return `/**\n     * Converts a date/time string to a DB compatible string\n     *\n     * @param string $date\n     * @return string\n     * @throws Exception\n     */`; };"
		},
		{
			"name": "formatDimension",
			"doc": "/**\n     * Formats $dimension based on the current format.\n     *\n     * @param  decimal $dimension Dimension to format\n     * @return string\n     */",
			"params": "dimension",
			"fn": "\nCentreRegionalisation.prototype.formatDimension = function(dimension) { return `/**\n     * Formats $dimension based on the current format.\n     *\n     * @param  decimal $dimension Dimension to format\n     * @return string\n     */`; };"
		},
		{
			"name": "formatWeight",
			"doc": "/**\n     * Appends the unit to $weight.\n     *\n     * @param  decimal $weight Weight to format\n     * @return string\n     */",
			"params": "weight",
			"fn": "\nCentreRegionalisation.prototype.formatWeight = function(weight) { return `/**\n     * Appends the unit to $weight.\n     *\n     * @param  decimal $weight Weight to format\n     * @return string\n     */`; };"
		},
		{
			"name": "save",
			"doc": "/**\n     * Saves the current object to DB.\n     * Handles both create and update tasks.\n     *\n     * @return void\n     */",
			"params": "",
			"fn": "\nCentreRegionalisation.prototype.save = function() { return `/**\n     * Saves the current object to DB.\n     * Handles both create and update tasks.\n     *\n     * @return void\n     */`; };"
		},
		{
			"name": "toArray",
			"doc": "/**\n     * Returns the array version of the DB values in key value pair format.\n     *\n     * @return array\n     */",
			"params": "",
			"fn": "\nCentreRegionalisation.prototype.toArray = function() { return `/**\n     * Returns the array version of the DB values in key value pair format.\n     *\n     * @return array\n     */`; };"
		},
		{
			"name": "getDimensionAndWeightUnitOption",
			"doc": "/**\n     * Returns the available options for the dimension and weight select field.\n     *\n     * @return array\n     */",
			"params": "",
			"fn": "\nCentreRegionalisation.prototype.getDimensionAndWeightUnitOption = function() { return `/**\n     * Returns the available options for the dimension and weight select field.\n     *\n     * @return array\n     */`; };"
		},
		{
			"name": "getCurrencyOptions",
			"doc": "/**\n     * Returns the available options for the currency field.\n     *\n     * @return array\n     */",
			"params": "",
			"fn": "\nCentreRegionalisation.prototype.getCurrencyOptions = function() { return `/**\n     * Returns the available options for the currency field.\n     *\n     * @return array\n     */`; };"
		},
		{
			"name": "getCurrencyFormatOptions",
			"doc": "/**\n     * Returns the available options for the currency format field.\n     *\n     * @return array\n     */",
			"params": "",
			"fn": "\nCentreRegionalisation.prototype.getCurrencyFormatOptions = function() { return `/**\n     * Returns the available options for the currency format field.\n     *\n     * @return array\n     */`; };"
		},
		{
			"name": "getTimezoneOptions",
			"doc": "/**\n     * Returns the available options for the timezone field.\n     *\n     * @return array\n     */",
			"params": "",
			"fn": "\nCentreRegionalisation.prototype.getTimezoneOptions = function() { return `/**\n     * Returns the available options for the timezone field.\n     *\n     * @return array\n     */`; };"
		},
		{
			"name": "format",
			"doc": "/**\n     * Formats $raw_value based on the current format defined in the centre's settings.\n     * If $raw_value is empty, then this method will return\n     * the unit determined by $format_type.\n     * This method will be passed to smarty as a modifier for easy access by integrators.\n     *\n     *                            This can be either weight, dimension,\n     *                            currency, time, date, and datetime.\n     *\n     * @param  string $raw_value Date value.\n     * @param  string $format_type The type of formatting to use.\n     * @return string\n     */",
			"params": "raw_value, format_type",
			"fn": "\nCentreRegionalisation.prototype.format = function(raw_value, format_type) { return `/**\n     * Formats $raw_value based on the current format defined in the centre's settings.\n     * If $raw_value is empty, then this method will return\n     * the unit determined by $format_type.\n     * This method will be passed to smarty as a modifier for easy access by integrators.\n     *\n     *                            This can be either weight, dimension,\n     *                            currency, time, date, and datetime.\n     *\n     * @param  string $raw_value Date value.\n     * @param  string $format_type The type of formatting to use.\n     * @return string\n     */`; };"
		},
		{
			"name": "getDateFormatOptions",
			"doc": "/**\n     * Returns the available options for the date format field.\n     *\n     * @return array\n     */",
			"params": "",
			"fn": "\nCentreRegionalisation.prototype.getDateFormatOptions = function() { return `/**\n     * Returns the available options for the date format field.\n     *\n     * @return array\n     */`; };"
		},
		{
			"name": "getTimeFormatOptions",
			"doc": "/**\n     * Returns the available options for the time format field.\n     *\n     * @return array\n     */",
			"params": "",
			"fn": "\nCentreRegionalisation.prototype.getTimeFormatOptions = function() { return `/**\n     * Returns the available options for the time format field.\n     *\n     * @return array\n     */`; };"
		},
		{
			"name": "convertDateFormatToDatePicker",
			"doc": "/**\n     * Converts a date format to jquery Datepicker compatible format\n     *\n     * @param string $format\n     * @return string\n     */",
			"params": "format",
			"fn": "\nCentreRegionalisation.prototype.convertDateFormatToDatePicker = function(format) { return `/**\n     * Converts a date format to jquery Datepicker compatible format\n     *\n     * @param string $format\n     * @return string\n     */`; };"
		},
		{
			"name": "convertTimeFormatToTimePicker",
			"doc": "/**\n     * Converts a time format to jquery Timepicker compatible format\n     *\n     * @param string $format\n     * @return string\n     */",
			"params": "format",
			"fn": "\nCentreRegionalisation.prototype.convertTimeFormatToTimePicker = function(format) { return `/**\n     * Converts a time format to jquery Timepicker compatible format\n     *\n     * @param string $format\n     * @return string\n     */`; };"
		}
	],
	"Pubuser": [
		{
			"name": "__construct",
			"doc": false,
			"params": "resArr",
			"fn": "\nPubuser.prototype.__construct = function(resArr) { return ``; };"
		},
		{
			"name": "setField",
			"doc": "/**\r\n     * @param $fldStr\r\n     * @param $newValue\r\n     * @param $prefix\r\n     */",
			"params": "fldStr, newValue, prefix",
			"fn": "\nPubuser.prototype.setField = function(fldStr, newValue, prefix) { return `/**\r\n     * @param $fldStr\r\n     * @param $newValue\r\n     * @param $prefix\r\n     */`; };"
		},
		{
			"name": "getField",
			"doc": "/**\r\n     * @param  $key\r\n     * @return mixed\r\n     */",
			"params": "key",
			"fn": "\nPubuser.prototype.getField = function(key) { return `/**\r\n     * @param  $key\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "setRecord",
			"doc": "/**\r\n     * @param $newRecord\r\n     */",
			"params": "newRecord",
			"fn": "\nPubuser.prototype.setRecord = function(newRecord) { return `/**\r\n     * @param $newRecord\r\n     */`; };"
		},
		{
			"name": "add",
			"doc": "/**\r\n     * @param  $args\r\n     * @return mixed\r\n     */",
			"params": "args",
			"fn": "\nPubuser.prototype.add = function(args) { return `/**\r\n     * @param  $args\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getAddressBookIndex",
			"doc": "/**\r\n     * get the index of the default address\r\n     *\r\n     * @param  $args\r\n     * @return int\r\n     */",
			"params": "args",
			"fn": "\nPubuser.prototype.getAddressBookIndex = function(args) { return `/**\r\n     * get the index of the default address\r\n     *\r\n     * @param  $args\r\n     * @return int\r\n     */`; };"
		},
		{
			"name": "updatenew",
			"doc": "/**\r\n     * @param  array $args\r\n     * @return mixed\r\n     */",
			"params": "args",
			"fn": "\nPubuser.prototype.updatenew = function(args) { return `/**\r\n     * @param  array $args\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "update",
			"doc": false,
			"params": "",
			"fn": "\nPubuser.prototype.update = function() { return ``; };"
		},
		{
			"name": "validateAddressBookEntries",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "args",
			"fn": "\nPubuser.prototype.validateAddressBookEntries = function(args) { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "convertToAddressBookData",
			"doc": "/**\r\n     * This function will return addressbook ready data from a regular pubuser insert/update\r\n     * @return array\r\n     */",
			"params": "args, update",
			"fn": "\nPubuser.prototype.convertToAddressBookData = function(args, update) { return `/**\r\n     * This function will return addressbook ready data from a regular pubuser insert/update\r\n     * @return array\r\n     */`; };"
		},
		{
			"name": "updateAddressBookEntries",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "args",
			"fn": "\nPubuser.prototype.updateAddressBookEntries = function(args) { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "updateAddressBookEntry",
			"doc": "/**\r\n     * @return array/false\r\n     */",
			"params": "args",
			"fn": "\nPubuser.prototype.updateAddressBookEntry = function(args) { return `/**\r\n     * @return array/false\r\n     */`; };"
		},
		{
			"name": "addAddressBookEntries",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "args",
			"fn": "\nPubuser.prototype.addAddressBookEntries = function(args) { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getAddressBookEntries",
			"doc": "/**\r\n     * Return all of this users addressbook default,\r\n     * or pass it an id of the addressbook to get.\r\n     *\r\n     * @param  $addressid    id of the addressbook\r\n     * @return array/false\r\n     */",
			"params": "addressid",
			"fn": "\nPubuser.prototype.getAddressBookEntries = function(addressid) { return `/**\r\n     * Return all of this users addressbook default,\r\n     * or pass it an id of the addressbook to get.\r\n     *\r\n     * @param  $addressid    id of the addressbook\r\n     * @return array/false\r\n     */`; };"
		},
		{
			"name": "removeAddressBook",
			"doc": "/**\r\n     * @param  $id     id of the addressbook to remove\r\n     * @return mixed\r\n     */",
			"params": "id",
			"fn": "\nPubuser.prototype.removeAddressBook = function(id) { return `/**\r\n     * @param  $id     id of the addressbook to remove\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "setUserDefaultAddress",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "args",
			"fn": "\nPubuser.prototype.setUserDefaultAddress = function(args) { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "remove",
			"doc": false,
			"params": "",
			"fn": "\nPubuser.prototype.remove = function() { return ``; };"
		},
		{
			"name": "getId",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getId = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getCentreId",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCentreId = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getTitle",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getTitle = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getFirstname",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getFirstname = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getLastname",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getLastname = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getLogin",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getLogin = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getPassword",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getPassword = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getIsadmin",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getIsadmin = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getEmail",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getEmail = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getCountryId",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCountryId = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getStateId",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getStateId = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getSuburb",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getSuburb = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getCity",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCity = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getPostcode",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getPostcode = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getAddress1",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getAddress1 = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getAddress2",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getAddress2 = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getAddress3",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getAddress3 = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getPhoneDay",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getPhoneDay = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getPhoneEve",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getPhoneEve = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getFax",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getFax = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getOccupation",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getOccupation = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getCompany",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCompany = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getBusCat",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getBusCat = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getUrl",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getUrl = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getJobDpt",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getJobDpt = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getSenior",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getSenior = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getWork",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getWork = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getGender",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getGender = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getDateCreated",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getDateCreated = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getDateModified",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getDateModified = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getIpinsert",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getIpinsert = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getPublish",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getPublish = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getCurlogin",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCurlogin = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getLastLogin",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getLastLogin = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getLoginCount",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getLoginCount = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getExpire",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getExpire = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getSecurity",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getSecurity = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getStatus",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getStatus = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getCentreDir",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCentreDir = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getSentId",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getSentId = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getComment",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getComment = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getPhoto",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getPhoto = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getDefaultAccess",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getDefaultAccess = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getInheritAccess",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getInheritAccess = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getSalt",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getSalt = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getDob",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getDob = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getNickname",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getNickname = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getCheckNewsLetter",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCheckNewsLetter = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getCustom1",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCustom1 = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getCustom2",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCustom2 = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getCustom3",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCustom3 = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getCustom4",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCustom4 = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getCustom5",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCustom5 = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getRegLimit",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getRegLimit = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "isAdmin",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.isAdmin = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getPwd",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getPwd = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getState",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getState = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getAddr1",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getAddr1 = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getAddr2",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getAddr2 = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getAddr3",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getAddr3 = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getPhoneEvn",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getPhoneEvn = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getOccupationId",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getOccupationId = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getSmallPhoto",
			"doc": false,
			"params": "",
			"fn": "\nPubuser.prototype.getSmallPhoto = function() { return ``; };"
		},
		{
			"name": "getMediumPhoto",
			"doc": false,
			"params": "",
			"fn": "\nPubuser.prototype.getMediumPhoto = function() { return ``; };"
		},
		{
			"name": "getUpdateIp",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getUpdateIp = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getAge",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getAge = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getMchimpLeid",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getMchimpLeid = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "isAtLeastAdmin",
			"doc": false,
			"params": "",
			"fn": "\nPubuser.prototype.isAtLeastAdmin = function() { return ``; };"
		},
		{
			"name": "getTaxExempt",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getTaxExempt = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getTaxEntity",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getTaxEntity = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "isLoggedIn",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.isLoggedIn = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getFullname",
			"doc": false,
			"params": "",
			"fn": "\nPubuser.prototype.getFullname = function() { return ``; };"
		},
		{
			"name": "getDefaultAddressId",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getDefaultAddressId = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "setDefaultAddressId",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "id",
			"fn": "\nPubuser.prototype.setDefaultAddressId = function(id) { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "setImage",
			"doc": "/**\r\n     * @param $files\r\n     */",
			"params": "files",
			"fn": "\nPubuser.prototype.setImage = function(files) { return `/**\r\n     * @param $files\r\n     */`; };"
		},
		{
			"name": "joinGroup",
			"doc": "/**\r\n     * @param $group\r\n     */",
			"params": "group",
			"fn": "\nPubuser.prototype.joinGroup = function(group) { return `/**\r\n     * @param $group\r\n     */`; };"
		},
		{
			"name": "leaveGroup",
			"doc": "/**\r\n     * @param $group\r\n     */",
			"params": "group",
			"fn": "\nPubuser.prototype.leaveGroup = function(group) { return `/**\r\n     * @param $group\r\n     */`; };"
		},
		{
			"name": "updateGroups",
			"doc": "/**\r\n     * @param array $group_ids\r\n     * @param $remove_existing\r\n     */",
			"params": "group_ids, remove_existing",
			"fn": "\nPubuser.prototype.updateGroups = function(group_ids, remove_existing) { return `/**\r\n     * @param array $group_ids\r\n     * @param $remove_existing\r\n     */`; };"
		},
		{
			"name": "getGroups",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getGroups = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getRetailers",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getRetailers = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "isMemberOfGroup",
			"doc": "/**\r\n     * @param  $group\r\n     * @return mixed\r\n     */",
			"params": "group",
			"fn": "\nPubuser.prototype.isMemberOfGroup = function(group) { return `/**\r\n     * @param  $group\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "isMemberOfGroupID",
			"doc": "/**\r\n     * @param $group_id\r\n     */",
			"params": "group_id",
			"fn": "\nPubuser.prototype.isMemberOfGroupID = function(group_id) { return `/**\r\n     * @param $group_id\r\n     */`; };"
		},
		{
			"name": "isOwnerOfGroup",
			"doc": "/**\r\n     * @param  $group\r\n     * @return mixed\r\n     */",
			"params": "group",
			"fn": "\nPubuser.prototype.isOwnerOfGroup = function(group) { return `/**\r\n     * @param  $group\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "setDefaultAccess",
			"doc": "/**\r\n     * @param  $new_access\r\n     * @return mixed\r\n     */",
			"params": "new_access",
			"fn": "\nPubuser.prototype.setDefaultAccess = function(new_access) { return `/**\r\n     * @param  $new_access\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getType",
			"doc": false,
			"params": "",
			"fn": "\nPubuser.prototype.getType = function() { return ``; };"
		},
		{
			"name": "getApiClientId",
			"doc": false,
			"params": "",
			"fn": "\nPubuser.prototype.getApiClientId = function() { return ``; };"
		},
		{
			"name": "getApiClientSecret",
			"doc": false,
			"params": "",
			"fn": "\nPubuser.prototype.getApiClientSecret = function() { return ``; };"
		},
		{
			"name": "getApiRedirectUri",
			"doc": false,
			"params": "",
			"fn": "\nPubuser.prototype.getApiRedirectUri = function() { return ``; };"
		},
		{
			"name": "getApiClientDetails",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getApiClientDetails = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getAssets",
			"doc": "/**\r\n     * getAssets\r\n     *\r\n     * Returns the array of assets\r\n     *\r\n     * @return array\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getAssets = function() { return `/**\r\n     * getAssets\r\n     *\r\n     * Returns the array of assets\r\n     *\r\n     * @return array\r\n     */`; };"
		},
		{
			"name": "isSimpleProfile",
			"doc": "/**\r\n     * Determine if profile was created via simple registration or not\r\n     *\r\n     * @return boolean\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.isSimpleProfile = function() { return `/**\r\n     * Determine if profile was created via simple registration or not\r\n     *\r\n     * @return boolean\r\n     */`; };"
		},
		{
			"name": "getCartField",
			"doc": "/**\r\n     * Get a field from the cart session or the user record if the field is empty\r\n     *\r\n     * @param  string $field\r\n     * @param  string $fallback\r\n     * @param  string $fallbackMethod\r\n     * @return string\r\n     */",
			"params": "field, fallback, fallbackMethod",
			"fn": "\nPubuser.prototype.getCartField = function(field, fallback, fallbackMethod) { return `/**\r\n     * Get a field from the cart session or the user record if the field is empty\r\n     *\r\n     * @param  string $field\r\n     * @param  string $fallback\r\n     * @param  string $fallbackMethod\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "getCartCompany",
			"doc": "/**\r\n     * Get company specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCartCompany = function() { return `/**\r\n     * Get company specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "getCartFirstname",
			"doc": "/**\r\n     * Get firstname specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCartFirstname = function() { return `/**\r\n     * Get firstname specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "getCartLastname",
			"doc": "/**\r\n     * Get lastname specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCartLastname = function() { return `/**\r\n     * Get lastname specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "getCartEmail",
			"doc": "/**\r\n     * Get email specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCartEmail = function() { return `/**\r\n     * Get email specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "getCartPhone",
			"doc": "/**\r\n     * Get phone specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCartPhone = function() { return `/**\r\n     * Get phone specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "getCartAddress",
			"doc": "/**\r\n     * Get address specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCartAddress = function() { return `/**\r\n     * Get address specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "getCartSuburb",
			"doc": "/**\r\n     * Get suburb specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCartSuburb = function() { return `/**\r\n     * Get suburb specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "getCartPostcode",
			"doc": "/**\r\n     * Get postcode specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCartPostcode = function() { return `/**\r\n     * Get postcode specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "getCartCity",
			"doc": "/**\r\n     * Get city specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCartCity = function() { return `/**\r\n     * Get city specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "getCartState",
			"doc": "/**\r\n     * Get state specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCartState = function() { return `/**\r\n     * Get state specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "getCartCountry",
			"doc": "/**\r\n     * Get country specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCartCountry = function() { return `/**\r\n     * Get country specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "getCartComments",
			"doc": "/**\r\n     * Get comments specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getCartComments = function() { return `/**\r\n     * Get comments specifically for the cart, will fall back to session if user isn't logged in\r\n     *\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "getCartCustomField",
			"doc": "/**\r\n     * Get order custom field for the cart from the session\r\n     *\r\n     * @param $i custom field index\r\n     * @return string\r\n     */",
			"params": "i",
			"fn": "\nPubuser.prototype.getCartCustomField = function(i) { return `/**\r\n     * Get order custom field for the cart from the session\r\n     *\r\n     * @param $i custom field index\r\n     * @return string\r\n     */`; };"
		},
		{
			"name": "getHookName",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getHookName = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getHookEmail",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getHookEmail = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getFavoriteContents",
			"doc": "/**\r\n     * Gets the user's favorite contents\r\n     *\r\n     * @param string $module the name of the module (optional)\r\n     * @param string $content the name of the content type (optional)\r\n     * @param array $dateRange an array of dates which specify a range by 'start' and 'end'. Date format: Y-m-d (optional)\r\n     * @param string $order the order of the results ('ASC'/'DESC'). Default: 'DESC' (optional)\r\n     * @return mixed\r\n     */",
			"params": "module, content, dateRange, order",
			"fn": "\nPubuser.prototype.getFavoriteContents = function(module, content, dateRange, order) { return `/**\r\n     * Gets the user's favorite contents\r\n     *\r\n     * @param string $module the name of the module (optional)\r\n     * @param string $content the name of the content type (optional)\r\n     * @param array $dateRange an array of dates which specify a range by 'start' and 'end'. Date format: Y-m-d (optional)\r\n     * @param string $order the order of the results ('ASC'/'DESC'). Default: 'DESC' (optional)\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getFavouriteContents",
			"doc": "/**\r\n     * Alternative spelling for getFavoriteContents(). Gets the user's favorite contents\r\n     *\r\n     * @return mixed\r\n     */",
			"params": "module, content, dateRange, order",
			"fn": "\nPubuser.prototype.getFavouriteContents = function(module, content, dateRange, order) { return `/**\r\n     * Alternative spelling for getFavoriteContents(). Gets the user's favorite contents\r\n     *\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getHookId",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getHookId = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "getKeyword",
			"doc": "/**\r\n     * @param $key\r\n     * @return mixed\r\n     */",
			"params": "key",
			"fn": "\nPubuser.prototype.getKeyword = function(key) { return `/**\r\n     * @param $key\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "canStoreObject",
			"doc": "/**\r\n     * @return bool\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.canStoreObject = function() { return `/**\r\n     * @return bool\r\n     */`; };"
		},
		{
			"name": "getStoreKey",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.getStoreKey = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "reloadActionData",
			"doc": "/**\r\n     * @param Action $action\r\n     * @return mixed\r\n     */",
			"params": "action",
			"fn": "\nPubuser.prototype.reloadActionData = function(action) { return `/**\r\n     * @param Action $action\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "__sleep",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.__sleep = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		},
		{
			"name": "__wakeup",
			"doc": "/**\r\n     * @return mixed\r\n     */",
			"params": "",
			"fn": "\nPubuser.prototype.__wakeup = function() { return `/**\r\n     * @return mixed\r\n     */`; };"
		}
	]
}

const formatted =  Object
	.keys(objects)
	.reduce((acc, clazz) => {
		acc[clazz] = objects[clazz].map(formatItem(clazz))
		return acc
	}
	, {})

console.log('formatted', formatted)

export default formatted
