var keystone = require('keystone');

var Product = keystone.list('Product');

/**
 * List Products
 */
exports.list = function(req, res) {
  Product.model.find(function(err, items) {

    if (err) return res.json({ err: err });

    res.json(items);

  });
}

exports.get = function (req, res) {
  Product.model.findById(req.params.id).exec(function(err, item) {

    if (err) return res.json({ err: err });
    if (!item) return res.json('not found');

    res.json(item);

  });
}

