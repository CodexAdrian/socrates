import {User} from './user.js';

export interface TeamMember {
    team_id: string;
    user: User;
    role: string;
    permissions: number;
}