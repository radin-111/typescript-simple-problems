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

**Author:** Sheikh Radin
**Topic:** TypeScript Type Guide