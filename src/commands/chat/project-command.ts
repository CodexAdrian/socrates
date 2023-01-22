import {HTTP} from '@rubybb/http';
import {ChatInputCommandInteraction, EmbedBuilder, PermissionsString} from 'discord.js';

import {ProjectOptions} from '../../enums/project-options.js';
import {Language} from '../../models/enum-helpers/index.js';
import {EventData} from '../../models/internal-models.js';
import {Project} from '../../modrinth/models/project.js';
import {TeamMember} from '../../modrinth/models/team-member.js';
import {Lang} from '../../services/index.js';
import {Command, CommandDeferType} from '../index.js';


export class ProjectCommand implements Command {
    public deferType = CommandDeferType.PUBLIC;
    public names = [Lang.getRef('chatCommands.project', Language.Default)];
    public requireClientPerms: PermissionsString[] = [];

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        let args = {
            option: intr.options.getString(
                Lang.getRef('arguments.option', Language.Default)
            ) as ProjectOptions,
        };

        const project: Project = await HTTP.create({
                baseURL: `https://api.modrinth.com/v2`,
                debug: false,
                resultType: 'json',
                headers: {
                    'content-type': 'application/json',
                    'user-agent': `Discord Modrinth Bot`
                }
            }
        ).get(`project/${args.option}`);

        const links = [];

        if (project.issues_url) {
            links.push(`[:warning: Issues](${project.issues_url})`);
        }
        if (project.source_url) {
            links.push(`[:desktop: Source](${project.source_url})`);
        }
        if (project.discord_url) {
            links.push(`[:speech_bubble: Discord](${project.discord_url})`);
        }
        if (project.wiki_url) {
            links.push(`[:book: Wiki](${project.wiki_url})`);
        }

        const members: TeamMember[] = await HTTP.create({
                baseURL: `https://api.modrinth.com/v2`,
                debug: false,
                resultType: 'json',
                headers: {
                    'content-type': 'application/json',
                    'user-agent': `Discord Modrinth Bot`
                }
        }).get(`project/${args.option}/members`);

        let embed: EmbedBuilder;

        embed = Lang.getEmbed('displayEmbeds.project', data.lang, {
            TITLE: project.title,
            DESCRIPTION: project.description,
            DOWNLOADS: project.downloads.toString(),
            FOLLOWERS: project.followers.toString(),
            MEMBERS: members.map(member => member.user.username).join(', '),
            LINKS: links.join('\n'),
            CATEGORIES: project.categories.join(', '),
            ICON: project.icon_url,
        });

        await intr.reply({embeds: [embed]});
    }

}