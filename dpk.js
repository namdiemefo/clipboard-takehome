const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";

  if (event == null) {
    return TRIVIAL_PARTITION_KEY;
  }

  if (event.partitionKey) {
    return JSON.stringify(event.partitionKey);
  } else {
    const data = JSON.stringify(event);
    return crypto.createHash("sha3-512").update(data).digest("hex");
  }

};