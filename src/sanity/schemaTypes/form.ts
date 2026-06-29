import { defineType } from "sanity";
import { L, LT, S, list, locItem } from "./helpers";

export const form = defineType({
  name: "form",
  title: "Registration form",
  type: "document",
  fields: [
    list("roles", "Role options", [locItem()]),
    L("successTitle", "Success title"),
    L("successPre", "Success text (before name)"),
    LT("successPost", "Success text (after name)"),
    L("registerAnother", "Button: Register another"),
    L("title", "Form title"),
    LT("sub", "Form subtitle"),
    L("fullName", "Label: Full name"),
    L("namePlaceholder", "Placeholder: name"),
    L("mobile", "Label: Mobile"),
    S("mobilePlaceholder", "Placeholder: mobile"),
    L("state", "Label: State"),
    L("statePlaceholder", "Placeholder: state"),
    L("district", "Label: District"),
    L("districtPlaceholder", "Placeholder: district"),
    L("joinAs", "Label: Join as"),
    L("selectRole", "Placeholder: select role"),
    L("message", "Label: Message"),
    L("messagePlaceholder", "Placeholder: message"),
    L("submit", "Button: Submit"),
  ],
  preview: { prepare: () => ({ title: "Registration form" }) },
});
