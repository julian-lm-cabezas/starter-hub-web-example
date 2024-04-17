#!/bin/sh

CONFIG_VARS=${VAULT_SECRETS_ENV:-/opt/vault_secrets/common.env}

# Replace code placeholders with configuration variables
# The placeholders follow the pattern ###var_id###
if test -f "${CONFIG_VARS}"; then
    while IFS="=" read -r key value; do
        find /usr/share/nginx/html/* -type f -exec sed -i "s|###${key}###|${value}|g" {} \;
    done < "$CONFIG_VARS"
else
    echo "[WARNING] No vars file found, skipping replacement"
fi

CONFIG_VARS=${VAULT_SECRETS_ENV:-/opt/vault_secrets/secrets.env}

# Replace code placeholders with configuration variables
# The placeholders follow the pattern ###var_id###
if test -f "${CONFIG_VARS}"; then
    while IFS="=" read -r key value; do
        find /usr/share/nginx/html/* -type f -exec sed -i "s|###${key}###|${value}|g" {} \;
    done < "$CONFIG_VARS"
else
    echo "[WARNING] No vars file found, skipping replacement"
fi

# Exec CMD
exec "$@"
