var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Product = new keystone.List('Product');

Product.add({
	name: { type: Types.Text, initial: true, required: true },
	description: { type: Types.Textarea, initial: true, required: true },
  status: { type: Types.Number },
  location: { type: Types.Location, defaults: { country: 'Argentina' } },
  images: { type: Types.CloudinaryImages },
  owner: { type: Types.Relationship, ref: 'User' }  
});

/**
 * Registration
 */
Product.defaultColumns = 'name, owner';
Product.register();
