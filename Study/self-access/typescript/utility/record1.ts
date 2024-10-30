type FEstack = "react" | "vue" | "angular";

interface FEInfo {
  preference: number;
  subStack: string;
}

const fe: Record<FEstack, FEInfo> = {
  react: {
    preference: 100,
    subStack: "next",
  },
  vue: {
    preference: 50,
    subStack: "nuxt",
  },
  angular: {
    preference: 30,
    subStack: "nx",
  },
};

console.log(fe.react); // { preference: 100, subStack: 'next' }
