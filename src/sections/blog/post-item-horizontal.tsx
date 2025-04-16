import type { IPostItem } from 'src/types/blog';
import type { CardProps } from '@mui/material/Card';

import { usePopover } from 'minimal-shared/hooks';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { fDate } from 'src/utils/format-time';
import { fShortenNumber } from 'src/utils/format-number';

import { Label } from 'src/components/label';
import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { CustomPopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

type Props = CardProps & {
  post: IPostItem;
  editHref: string;
  detailsHref: string;
};

export function PostItemHorizontal({ sx, post, editHref, detailsHref, ...other }: Props) {
  const menuActions = usePopover();

  const renderMenuActions = () => (
    <CustomPopover
      open={menuActions.open}
      anchorEl={menuActions.anchorEl}
      onClose={menuActions.onClose}
      slotProps={{ arrow: { placement: 'bottom-center' } }}
    >
      <MenuList>
        <li>
          <MenuItem component={RouterLink} href={detailsHref} onClick={() => menuActions.onClose()}>
            <Iconify icon="solar:eye-bold" />
            View
          </MenuItem>
        </li>

        <li>
          <MenuItem component={RouterLink} href={editHref} onClick={() => menuActions.onClose()}>
            <Iconify icon="solar:pen-bold" />
            Edit
          </MenuItem>
        </li>

        <MenuItem onClick={() => menuActions.onClose()} sx={{ color: 'error.main' }}>
          <Iconify icon="solar:trash-bin-trash-bold" />
          Delete
        </MenuItem>
      </MenuList>
    </CustomPopover>
  );
  return (
    <>
      <Card sx={[{ display: 'flex' }, ...(Array.isArray(sx) ? sx : [sx])]} {...other}>
        <Stack
          spacing={1}
          sx={[
            (theme) => ({
              flexGrow: 1,
              p: theme.spacing(3, 3, 2, 3),
            }),
          ]}
        >
          <Box
            sx={{
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Label variant="soft" color={(post.publish === 'published' && 'info') || 'default'}>
              {post.status}
            </Label>

            <Box component="span" sx={{ typography: 'caption', color: 'text.disabled' }}>
              dd/MMM/yyyy
            </Box>
          </Box>

          <Stack spacing={1} sx={{ flexGrow: 1 }}>
            <Link
              component={RouterLink}
              href={detailsHref}
              color="inherit"
              variant="subtitle2"
              sx={[
                (theme) => ({
                  ...theme.mixins.maxLine({ line: 2 }),
                }),
              ]}
            >
              {post.name}
            </Link>

            <Typography
              variant="body2"
              sx={[
                (theme) => ({
                  ...theme.mixins.maxLine({ line: 2 }),
                  color: 'text.secondary',
                }),
              ]}
            >
              {post.description}
            </Typography>
          </Stack>
        </Stack>

        <Box
          sx={{
            p: 1,
            width: 180,
            height: 240,
            flexShrink: 0,
            position: 'relative',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Avatar
            src={post.owner.username.charAt(0).toUpperCase()}
            alt={post.owner.username.charAt(0).toUpperCase()}
            sx={{
              top: 16,
              right: 16,
              zIndex: 9,
              position: 'absolute',
            }}
          />
          <Image
            src={[post.icon.contentType, post.icon.content].join(',')}
            alt="../assets/background/background-6.webp"
            sx={{ height: 1, borderRadius: 1.5 }}
          />
        </Box>
      </Card>

      {renderMenuActions()}
    </>
  );
}
