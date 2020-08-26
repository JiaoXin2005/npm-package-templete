class Test {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  say() {
    console.log(`hello, ${this.name}`);
  }
}

new Test("tom");

export default Test;
