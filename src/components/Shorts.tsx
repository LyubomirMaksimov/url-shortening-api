import React, { useState } from "react";
import styles from "./Shorts.module.css";
import { ShortLink } from "../model/shortLink";
import Links from "./Links";

const Shorts = () => {
  const [origLink, setorigLink] = useState("");
  const [ShortLinks, setShortLinks] = useState<Array<ShortLink>>([]);
  const [error, setError] = useState(false);

  const AddLinkHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(`https://api.shrtco.de/v2/shorten?url=${origLink}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const {
          result: { full_short_link2 },
        } = data;

        const newLink: ShortLink = {
          id: Date.now().toString(),
          link: origLink,
          short: full_short_link2,
          copied: false,
        };

        setorigLink("");
        setShortLinks((state) => [...state, newLink]);
      })
      .catch((error) => {
        console.error("Error:", error);
        setorigLink("");
        setError(true);
      });
  };

  const copyhandler = (id: any) => {
    const links = ShortLinks.map((l) =>
      l.id === id ? { ...l, copied: true } : { ...l }
    );

    const link: ShortLink | undefined = ShortLinks.find(
      (l: ShortLink) => l.id === id
    );

    if (link) {
      navigator.clipboard.writeText(link.short);
      setShortLinks(links);
    }
  };

  return (
    <div className={styles.short}>
      <form className={styles.shortsForm} onSubmit={AddLinkHandler}>
        <input
          type="text"
          value={origLink}
          onChange={(e) => setorigLink(e.target.value)}
          placeholder="Shorten a link here..."
          className={`${styles.input} ${error ? [styles.error] : ""}`}
          onFocus={() => {
            setError(false);
            console.log(error);
          }}
        />
        <button type="submit" className={styles.btn}>
          Shorten it!
        </button>

        {error && <p className={styles.msg}>Please add a link</p>}
      </form>

      {ShortLinks?.map((l: any) => (
        <Links
          key={l.id}
          id={l.id}
          link={l.link}
          short={l.short}
          copied={l.copied}
          onCopy={copyhandler}
        />
      ))}
    </div>
  );
};

export default Shorts;
