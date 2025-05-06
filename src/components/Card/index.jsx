import Link from "next/link";

export default function Card({
  label,
  labelColor,
  title,
  description,
  href,
}) {
  return (
    <article
      className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition hover:shadow-xl"
      itemScope
      itemType="https://schema.org/Course"
    >
      <span
        className={`inline-block px-2 py-1 text-xs font-semibold rounded-md mb-2 ${labelColor}`}
      >
        {label}
      </span>

      <h2 className="text-lg font-semibold text-gray-900 mb-2" itemProp="name">
        {title}
      </h2>

      <p className="text-sm text-gray-600 mb-4" itemProp="description">
        {description}
      </p>

      <Link
        href={href}
        className="inline-block border border-blue-500 text-blue-600 px-4 py-2 text-sm font-semibold rounded hover:bg-blue-50 transition"
      >
        Take Lesson
      </Link>
    </article>
  );
}
