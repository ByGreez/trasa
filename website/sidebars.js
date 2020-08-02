module.exports = {
  docs: [
    // 'overview',
    // 'concepts',
    // 'glossary',
    {
      'Getting Started': [
        'getting-started/overview',
        'getting-started/concepts',
        'getting-started/glossary',
        'getting-started/signup-or-install',

        'getting-started/how-to',
      ],
      // Tutorial: ['tutorial/tutorial'],
      Install: ['install/installation', 'install/initial-setup'],
      Users: [
        'users/users-overview',
        'users/trasaIDP/trasa-idp',
        'users/ldap/ldap',
        // 'users/ad/active-directory',
        // 'users/freeIPA/free-ipa',
      ],
      Services: [
        'services/introduction',
        'services/privilege',
        'services/http/http-service',
        'services/rdp/rdp-service',
        'services/ssh/ssh-service',
      ],
      Policies: ['policies/index'],
      'Access Map': ['access-map/access-mapping'],
      'Access Proxy': ['access-proxy/index'],
      'Two Factor Authentication': ['native-tfa/index'],
      'Secret Vault': ['secret-vault/index'],
      'System Configurations': ['system/index'],
    },
  ],
  guides: [
    'guides/getting-started',
    {
      Account: ['guides/user/account/password-setup', 'guides/user/account/view-access-stats'],
      Device: [
        'guides/user/device/enrol-2fa-device',
        'guides/user/device/install-trasa-device-agent',
      ],
      Access: [
        'guides/user/access/dashboard-login',
        'guides/user/access/adhoc-access',
        'guides/user/access/tfa',
        'guides/user/access/ssh-connection-via-proxy',
        'guides/user/access/rdp-connection-via-proxy',
        'guides/user/access/https-connection-via-proxy',
      ],
    },
  ],
};