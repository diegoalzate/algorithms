function validSpacing(s) {
  return s.split("").filter((c) => c === " ").length
    ? s.split(" ").filter((c) => c !== "").length ===
        s.split("").filter((c) => c === " ").length + 1
    : true
}

// // best answer
// function validSpacing(s) {
//     return s.trim() == s && !s.includes("  ");
//   }