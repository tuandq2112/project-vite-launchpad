import type { BadgeProps } from '@mui/material/Badge';
import type { IconButtonProps } from '@mui/material/IconButton';

import { m } from 'framer-motion';
import { usePopover } from 'minimal-shared/hooks';

import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import SvgIcon from '@mui/material/SvgIcon';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';

import { fToNow } from 'src/utils/format-time';

import { Scrollbar } from 'src/components/scrollbar';
import { CustomPopover } from 'src/components/custom-popover';
import { varTap, varHover, transitionTap } from 'src/components/animate';

// ----------------------------------------------------------------------

export type ContactsPopoverProps = IconButtonProps & {
  data?: {
    id: string;
    role: string;
    name: string;
    email: string;
    status: string;
    address: string;
    avatarUrl: string;
    phoneNumber: string;
    lastActivity: string;
  }[];
};

export function ContactsPopover({ data = [], sx, ...other }: ContactsPopoverProps) {
  return <>People</>;
}
