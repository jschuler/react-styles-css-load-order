# PF issue

https://github.com/patternfly/patternfly-react/pull/7971

Using a recent version of react-core, the CSS load ordering has changed due to changes in the react-styles package.

That is because react-styles changed behavior from 4.52.21 to 4.52.22 due to https://github.com/patternfly/patternfly-react/pull/7084.

This workspace recreates the issue and shows how this change to react-styles (https://github.com/patternfly/patternfly-react/pull/7971) would fix it.
It demonstrates this by using patch-package, which will overwrite files in node_modules/@patternfly/react-styles, by replacing CSS import statements in *.mjs files from `import('./something.css')` to `import './something.css'`.

# Install
```
npm install
```

# Run
```
npm start
```

Observe that the secondary header containing the "Status" nav items is contained in the main header. That is because the custom CSS that puts it in the next row is overwritten by PF due to the CSS load order.

# Patch
```
// remove cached files
rm -rf node_modules/.cache
// patch node_modules/@patternfly/react-styles
npm run patch
npm start
```

Observe now that after the changes to react-styles, the load order is preserved, and the "Status" nav items are in the next row.
