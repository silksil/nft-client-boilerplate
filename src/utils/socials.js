import discord from "@iconify/icons-ic/baseline-discord";
import twitter from "@iconify/icons-eva/twitter-fill";
import { collectionInfo } from "src/config/collectionInfo";

export const DISCORD = { name: "Discord", icon: discord, url: collectionInfo.discordUrl };
export const TWITTER = { name: "Twitter", icon: twitter, url: collectionInfo.twitterUrl };

export const SOCIALS = [DISCORD, TWITTER];
