"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Content } from "./content";

export type Lang = "en" | "mr";
export type ContentBundle = { en: Content; mr: Content };

const STORAGE_KEY = "roadveer-lang";

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  content: ContentBundle;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({
  children,
  content,
}: {
  children: ReactNode;
  content: ContentBundle;
}) {
  // Start as "en" so the server-rendered markup matches the first client
  // render (avoids hydration mismatch); the stored choice is applied below.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "mr") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  const toggle = () => setLang(lang === "en" ? "mr" : "en");

  return (
    <LangContext.Provider value={{ lang, setLang, toggle, content }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}

/** Returns the active language's content tree. */
export function useContent(): Content {
  const { content, lang } = useLang();
  return content[lang];
}
