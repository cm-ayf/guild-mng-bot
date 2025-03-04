import { ChatInputCommandInteraction, SlashCommandBuilder, VoiceChannel } from "discord.js";
import "../services/discord";
import { Command, ReplyEmbedType, getReplyEmbed } from "../services/discord";
import keyvs, { KeyvKeys } from "../services/keyvs";
import { __t } from "../services/locale";

export const afkCommand: Command = {
    data: new SlashCommandBuilder()
        .setName("afk")
        .setDescription(__t("bot/command/afk/description"))
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription(__t("bot/command/afk/userOption/description"))
                .setRequired(true)
        ),
    execute: async (interaction: ChatInputCommandInteraction) => {
        const user = interaction.options.getUser("user")!;
        const member = await interaction.guild?.members.fetch(user.id);
        if (!member) {
            const embed = getReplyEmbed(__t("bot/command/notFoundUser", { user: user.toString() }), ReplyEmbedType.Warn);
            interaction.reply({ embeds: [embed] });
            return;
        }
        const afkChannel = await keyvs.getValue(interaction.guildId!, KeyvKeys.DestAfkVC) as VoiceChannel | undefined;
        if (!afkChannel) {
            const embed = getReplyEmbed(__t("bot/command/unsetDestAfk"), ReplyEmbedType.Warn);
            interaction.reply({ embeds: [embed] });
            return;
        }
        const channel = await interaction.guild?.channels.fetch(afkChannel.id);
        if (!channel) {
            const embed = getReplyEmbed(__t("bot/command/notFoundDestAfk"), ReplyEmbedType.Warn);
            interaction.reply({ embeds: [embed] });
            return;
        }
        if (channel.id === member.voice.channel?.id) {
            const embed = getReplyEmbed(__t("bot/command/afk/alreadyAfk", { user: member.toString(), channel: channel.toString() }), ReplyEmbedType.Warn);
            interaction.reply({ embeds: [embed] });
            return;
        }
        member.voice.setChannel(channel.id)
            .then(() => {
                const embed = getReplyEmbed(__t("bot/command/afk/success", { user: member.toString(), channel: channel.toString() }), ReplyEmbedType.Success);
                interaction.reply({ embeds: [embed] });
            }).catch((error) => {
                const embed = getReplyEmbed(__t("bot/command/afk/faild", { user: member.toString(), error: error.toString() }), ReplyEmbedType.Warn);
                interaction.reply({ embeds: [embed] });
            });
    }
};

export default afkCommand;
