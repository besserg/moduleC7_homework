import { revertString } from "../revertString.js";

describe(
  "tests for revertString function", 
  () => { 
        it("Test reverse string 'abc' -> 'cba'", () => {
          expect(revertString("abc")).toBe("cba");
        }),
        it("Test reverse string with russian word 'АБВГ' -> 'ГВБА'", () => {
          expect(revertString("АБВГ")).toBe("ГВБА");
        });
      }
);
