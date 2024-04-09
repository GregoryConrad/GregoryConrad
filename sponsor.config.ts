import { defineConfig, presets } from "sponsorkit";

export default defineConfig({
  github: {
    login: "GregoryConrad",
  },
  width: 800,
  formats: ["png", "svg"],
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: '🫶 Backers',
      preset: presets.base,
    },
    {
      title: '🥉 Sponsors',
      monthlyDollars: 32,
      preset: presets.medium,
    },
    {
      title: '🥈 Sponsors',
      monthlyDollars: 64,
      preset: presets.large,
    },
    {
      title: '🥇 Sponsors',
      monthlyDollars: 128,
      preset: presets.xl,
    },
  ],
});
