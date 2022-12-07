// source: buf/alpha/audit/v1alpha1/module.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin', null, global);
goog.exportSymbol('proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference', null, global);
goog.exportSymbol('proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult', null, global);
goog.exportSymbol('proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1ResolvedReferenceType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.displayName = 'proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference.displayName = 'proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult.displayName = 'proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.prototype.toObject = function(opt_includeInstance) {
  return proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: jspb.Message.getFieldWithDefault(msg, 1, ""),
    repository: jspb.Message.getFieldWithDefault(msg, 2, ""),
    branch: jspb.Message.getFieldWithDefault(msg, 3, ""),
    commit: jspb.Message.getFieldWithDefault(msg, 4, ""),
    digest: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin;
  return proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepository(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranch(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommit(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDigest(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRepository();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBranch();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCommit();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDigest();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string owner = 1;
 * @return {string}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin} returns this
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string repository = 2;
 * @return {string}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.prototype.getRepository = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin} returns this
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.prototype.setRepository = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string branch = 3;
 * @return {string}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.prototype.getBranch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin} returns this
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.prototype.setBranch = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string commit = 4;
 * @return {string}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.prototype.getCommit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin} returns this
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.prototype.setCommit = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string digest = 5;
 * @return {string}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.prototype.getDigest = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin} returns this
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.prototype.setDigest = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin} returns this
*/
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin} returns this
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference.prototype.toObject = function(opt_includeInstance) {
  return proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: jspb.Message.getFieldWithDefault(msg, 1, ""),
    repository: jspb.Message.getFieldWithDefault(msg, 2, ""),
    reference: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference;
  return proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepository(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReference(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRepository();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReference();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string owner = 1;
 * @return {string}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference} returns this
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string repository = 2;
 * @return {string}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference.prototype.getRepository = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference} returns this
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference.prototype.setRepository = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string reference = 3;
 * @return {string}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference.prototype.getReference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference} returns this
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference.prototype.setReference = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult.prototype.toObject = function(opt_includeInstance) {
  return proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    reference: (f = msg.getReference()) && proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference.toObject(includeInstance, f),
    pin: (f = msg.getPin()) && proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.toObject(includeInstance, f),
    resolvedReferenceType: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult;
  return proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference;
      reader.readMessage(value,proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference.deserializeBinaryFromReader);
      msg.setReference(value);
      break;
    case 2:
      var value = new proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin;
      reader.readMessage(value,proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.deserializeBinaryFromReader);
      msg.setPin(value);
      break;
    case 3:
      var value = /** @type {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1ResolvedReferenceType} */ (reader.readEnum());
      msg.setResolvedReferenceType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReference();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference.serializeBinaryToWriter
    );
  }
  f = message.getPin();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin.serializeBinaryToWriter
    );
  }
  f = message.getResolvedReferenceType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional BufAlphaRegistryV1Alpha1LocalModuleReference reference = 1;
 * @return {?proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult.prototype.getReference = function() {
  return /** @type{?proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference} */ (
    jspb.Message.getWrapperField(this, proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference, 1));
};


/**
 * @param {?proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleReference|undefined} value
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult} returns this
*/
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult.prototype.setReference = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult} returns this
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult.prototype.clearReference = function() {
  return this.setReference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult.prototype.hasReference = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BufAlphaRegistryV1Alpha1LocalModulePin pin = 2;
 * @return {?proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult.prototype.getPin = function() {
  return /** @type{?proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin} */ (
    jspb.Message.getWrapperField(this, proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin, 2));
};


/**
 * @param {?proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModulePin|undefined} value
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult} returns this
*/
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult.prototype.setPin = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult} returns this
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult.prototype.clearPin = function() {
  return this.setPin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult.prototype.hasPin = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional BufAlphaRegistryV1Alpha1ResolvedReferenceType resolved_reference_type = 3;
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1ResolvedReferenceType}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult.prototype.getResolvedReferenceType = function() {
  return /** @type {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1ResolvedReferenceType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1ResolvedReferenceType} value
 * @return {!proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult} returns this
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1LocalModuleResolveResult.prototype.setResolvedReferenceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.buf.alpha.audit.v1alpha1.BufAlphaRegistryV1Alpha1ResolvedReferenceType = {
  BUF_ALPHA_REGISTRY_V1_ALPHA1_RESOLVED_REFERENCE_TYPE_UNSPECIFIED: 0,
  BUF_ALPHA_REGISTRY_V1_ALPHA1_RESOLVED_REFERENCE_TYPE_COMMIT: 1,
  BUF_ALPHA_REGISTRY_V1_ALPHA1_RESOLVED_REFERENCE_TYPE_BRANCH: 2,
  BUF_ALPHA_REGISTRY_V1_ALPHA1_RESOLVED_REFERENCE_TYPE_TAG: 3,
  BUF_ALPHA_REGISTRY_V1_ALPHA1_RESOLVED_REFERENCE_TYPE_TRACK: 4
};

goog.object.extend(exports, proto.buf.alpha.audit.v1alpha1);
