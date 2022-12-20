const CategoryModel = require("../models/category.model");
const PaymentMethodModel = require("../models/paymentMethod.model");
const ProductModel = require("../models/product.model");
const RecordModel = require("../models/record.model");


    ProductModel.belongsTo(CategoryModel, { foreingkey: "FK_products_categories" });
    CategoryModel.hasMany(ProductModel, { foreingkey: "FK_products_categories" });
    
    RecordModel.belongsTo(PaymentMethodModel, { foreingkey: "FK_records_payment_methods" });
    PaymentMethodModel.hasMany(RecordModel, { foreingkey: "FK_records_payment_methods" });
