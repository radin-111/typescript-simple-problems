# Blog 1:
## Difference between any, unknown, never

TypeScript-এ **any** হলো এমন এক ধরনের data type যেখানে যেকোনো type যেমন `string`, `number`, `boolean` ইত্যাদি ধরনের value assign করা যায়। এক্ষেত্রে কোনো বিধিনিষেধ নেই।

**উদাহরণ:**
```ts
let value: any = 10;
value = "Hello";
value = true;
```

আবার **unknown** বলতে বোঝায় এমন এক ধরনের data type যেটি `any`-এর মতোই, কিন্তু ব্যবহার করার সময় type check করতে হয়।

**উদাহরণ:**
```ts
let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```
এক্ষেত্রে type check না করলে প্রোগ্রাম crash করবে।

অন্যদিকে, TypeScript-এ **never** বলতে এমন function return type-কে বোঝায় যে function কোনো value return করে না, অর্থাৎ এমন function যা কখনো শেষ হয় না।

**উদাহরণ:**
```ts
function loopForever(): never {
  while (true) {}
}
```

---
# Blog 2:

## Union এবং Intersection

TypeScript এ union ও intersection দুটি খুব গুরুত্বপূর্ণ বিষয়।

## Union এর ব্যবহার

Union সাধারণত এমন সময় ব্যবহার করা হয় যখন একটি variable এর একাধিক type থাকতে পারে।
এক্ষেত্রে `|` ব্যবহার করা হয়।

```ts
function printId(id: string | number) {
  console.log("Your ID is:", id);
}

printId(101);
printId("A102");
```

## Intersection এর ব্যবহার

Intersection দিয়ে মূলত দুটি type কে এক করা হয়। এক্ষেত্রে TypeScript এ অনেক সময় type alias এর ব্যবহার প্রিলক্ষিত হয়।

```ts
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const staff1: Staff = {
  name: "Radin",
  employeeId: 101
};
```

এক্ষেত্রে `&` চিহ্ন ব্যবহারের মাধ্যমে দুটি type কে এক করা হয়েছে।