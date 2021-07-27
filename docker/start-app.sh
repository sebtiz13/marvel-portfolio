#!/usr/bin/env sh

MODIFIED=$(stat -c %y /app/package.json)
[ -f /root/lastmodified ] && read -r LASTMODIFIED < /root/lastmodified

cd /app

# npm install only on first start or when package.json has modified
if [[ "$MODIFIED" != "$LASTMODIFIED" ]]; then
  echo "Update package"
  npm install
  # update lastmodified
  echo "$MODIFIED" > /root/lastmodified
fi

exec npm run serve
