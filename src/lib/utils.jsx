export function cn(...classes) {
  // Process each argument to handle strings, objects, arrays
  const processedClasses = classes.flatMap((cls) => {
    if (cls == null) return [];

    // Handle strings
    if (typeof cls === "string") return cls.split(" ").filter(Boolean);

    // Handle arrays recursively
    if (Array.isArray(cls))
      return cn(...cls)
        .split(" ")
        .filter(Boolean);

    // Handle objects (key is included if value is truthy)
    if (typeof cls === "object") {
      return Object.entries(cls)
        .filter(([_, value]) => Boolean(value))
        .map(([key]) => key);
    }

    return [];
  });

  // Remove duplicates and merge
  // For tailwind-like utilities, keep only the last instance of utilities with same prefix
  const utilities = {};
  const regular = [];

  processedClasses.forEach((cls) => {
    // Check if it's likely a tailwind utility by looking for the pattern: prefix-value
    const match = cls.match(/^([a-z]+)(-[a-zA-Z0-9:_-]+)$/);

    if (match) {
      const [_, prefix] = match;
      utilities[prefix] = utilities[prefix] || [];
      utilities[prefix].push(cls);
    } else {
      // Not a tailwind utility or doesn't match our pattern
      regular.push(cls);
    }
  });

  // Keep only the last utility with each prefix
  const mergedUtilities = Object.values(utilities).map(
    (group) => group[group.length - 1]
  );

  // Merge all classes
  return [...new Set([...regular, ...mergedUtilities])].join(" ");
}
