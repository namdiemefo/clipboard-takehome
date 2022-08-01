const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns a stringified response when a partition key is attached to the event object", () => {
    const event = {
      partitionKey: 20
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(JSON.stringify(event.partitionKey));
  });

  it("Returns a string less than 256 when event is not null and does not contain partition key", () => {
    const event = 20;
    const trivialKey = deterministicPartitionKey(event);
    expect(typeof trivialKey).toBe("string");
    expect(trivialKey.length).toBeLessThan(256)
  });



});
