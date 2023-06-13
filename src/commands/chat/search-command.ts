import {HTTP} from '@rubybb/http';
import {ChatInputCommandInteraction, EmbedBuilder, PermissionsString} from 'discord.js';

import {ProjectOptions} from '../../enums/project-options.js';
import {Language} from '../../models/enum-helpers/index.js';
import {EventData} from '../../models/internal-models.js';
import {Project} from '../../modrinth/models/project.js';
import {TeamMember} from '../../modrinth/models/team-member.js';
import {Lang} from '../../services/index.js';
import {InteractionUtils} from '../../utils/interaction-utils.js';
import {Command, CommandDeferType} from '../index.js';

export class SearchCommand implements Command {
    public deferType = CommandDeferType.PUBLIC;
    public names = [Lang.getRef('chatCommands.project', Language.Default)];
    public requireClientPerms: PermissionsString[] = [];

    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        let args = {
            option: intr.options.getString(
                Lang.getRef('arguments.option', Language.Default)
            ) as ProjectOptions,
        };
    }
}