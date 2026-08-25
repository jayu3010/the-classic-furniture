"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const furnitureTypes = [
  "Custom Sofa",
  "Custom Wardrobe",
  "Custom Bed",
  "Custom TV Unit",
  "Custom Dining Table",
  "Office Furniture",
  "Other",
];

type EnquiryFormProps = {
  className?: string;
  defaultFurnitureType?: string;
};

export function EnquiryForm({
  className,
  defaultFurnitureType = "",
}: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [furnitureType, setFurnitureType] = useState(defaultFurnitureType);
  const [requirement, setRequirement] = useState("");
  const [message, setMessage] = useState("");
  const [fileLabel, setFileLabel] = useState("No file selected");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const whatsappMessage = [
    "Hello, I would like a custom furniture enquiry.",
    name ? `Name: ${name}` : null,
    phone ? `Phone: ${phone}` : null,
    furnitureType ? `Furniture type: ${furnitureType}` : null,
    requirement ? `Requirement: ${requirement}` : null,
    message ? `Message: ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  if (submitted) {
    return (
      <div
        className={cn(
          "rounded-lg border border-walnut/15 bg-stone/60 p-8 text-center sm:p-10",
          className,
        )}
      >
        <p className="font-display text-2xl text-espresso">Thank you</p>
        <p className="mt-3 font-sans text-muted leading-relaxed">
          Your enquiry details are ready. Continue on WhatsApp so our team can
          respond with options and a quote.
        </p>
        <Button asChild variant="whatsapp" size="lg" className="mt-8">
          <a
            href={getWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Continue on WhatsApp
          </a>
        </Button>
        <button
          type="button"
          className="mt-4 block w-full text-sm text-walnut underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40"
          onClick={() => setSubmitted(false)}
        >
          Edit enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-5", className)}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="enquiry-name">
          <input
            id="enquiry-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
            autoComplete="name"
          />
        </Field>
        <Field label="Phone Number" htmlFor="enquiry-phone">
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={fieldClass}
            autoComplete="tel"
          />
        </Field>
      </div>

      <Field label="Furniture Type" htmlFor="enquiry-type">
        <select
          id="enquiry-type"
          name="furnitureType"
          required
          value={furnitureType}
          onChange={(e) => setFurnitureType(e.target.value)}
          className={fieldClass}
        >
          <option value="">Select a type</option>
          {furnitureTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Requirement" htmlFor="enquiry-requirement">
        <input
          id="enquiry-requirement"
          name="requirement"
          type="text"
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          placeholder="Size, room, preferred finish…"
          className={fieldClass}
        />
      </Field>

      <Field label="Message" htmlFor="enquiry-message">
        <textarea
          id="enquiry-message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={cn(fieldClass, "resize-y min-h-[120px]")}
        />
      </Field>

      <div>
        <p className="mb-2 text-sm font-medium text-espresso">
          Reference Image
        </p>
        <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-walnut/25 bg-stone/40 px-4 py-8 text-center transition-colors hover:border-walnut/40 hover:bg-stone/70">
          <Upload className="h-5 w-5 text-walnut" aria-hidden />
          <span className="text-sm text-ink">Upload a reference photo</span>
          <span className="text-xs text-muted">{fileLabel}</span>
          <input
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={(e) => {
              const file = e.target.files?.[0];
              setFileLabel(file ? file.name : "No file selected");
            }}
          />
        </label>
        <p className="mt-2 text-xs text-muted">
          Visual only for now — share images directly on WhatsApp for the fastest
          response.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg">
          Submit Enquiry
        </Button>
        <Button asChild variant="whatsapp" size="lg">
          <a
            href={getWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire on WhatsApp
          </a>
        </Button>
      </div>
    </form>
  );
}

const fieldClass =
  "w-full rounded-md border border-walnut/20 bg-ivory px-3 py-2.5 font-sans text-sm text-ink placeholder:text-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-walnut/40";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="block text-sm font-medium text-espresso">
        {label}
      </label>
      {children}
    </div>
  );
}
