import { defineField, defineArrayMember } from "sanity";
import type { FieldDefinition, ArrayOfType } from "sanity";

// Localized single-line text field.
export const L = (name: string, title: string): FieldDefinition =>
  defineField({ name, title, type: "localeString" });

// Localized multi-line text field.
export const LT = (name: string, title: string): FieldDefinition =>
  defineField({ name, title, type: "localeText" });

// Plain (non-translated) string — anchors, numbers, proper-noun codes, URLs.
export const S = (name: string, title: string): FieldDefinition =>
  defineField({ name, title, type: "string" });

// Collapsible object field with nested fields.
export const object = (
  name: string,
  title: string,
  fields: FieldDefinition[]
): FieldDefinition =>
  defineField({
    name,
    title,
    type: "object",
    options: { collapsible: true, collapsed: false },
    fields,
  });

// Array field.
export const list = (
  name: string,
  title: string,
  of: ArrayOfType[]
): FieldDefinition =>
  defineField({ name, title, type: "array", of });

// Object array member (a repeatable row).
export const item = (
  name: string,
  fields: FieldDefinition[],
  preview?: { select: Record<string, string> }
): ArrayOfType =>
  defineArrayMember({ type: "object", name, fields, ...(preview ? { preview } : {}) });

// Array member that is itself a localized string (for string lists).
export const locItem = (): ArrayOfType =>
  defineArrayMember({ type: "localeString" });
