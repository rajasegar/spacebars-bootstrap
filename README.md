[Bootstrap] (http://getbootstrap.com) components written using Meteor Spacebars

### Instalation ###

    meteor add rajasegar:spacebars-bootstrap

### Usage ###

# Alerts
<h2>Alerts</h2>
{{#alert type="info"}} this is an info alert {{/alert}}
{{#alert type="warning"}} this is an warning alert {{/alert}}
{{#alert type="danger"}} this is an danger alert {{/alert}}
{{#alert type="success"}} this is an success alert {{/alert}}
<h2>Alerts - Custom</h2>
{{#alert_info}} This is an Info alert {{/alert_info}}
{{#alert_warning}} this is a <a href="#">warning</a> alert {{/alert_warning}}
{{#alert_success}} This is a <strong>Success</strong> alert {{/alert_success}}
{{#alert_danger}} This is a danger alert {{/alert_danger}}

<h2>Alerts with Icons</h2>
{{#alert_i type="danger" icon="remove"}} this is a danger alert with icon {{/alert_i}}
{{#alert_i type="success" icon="ok"}} this is an info alert {{/alert_i}}
{{#alert_i type="info" icon="info-sign"}} this is an info alert {{/alert_i}}
{{#alert_i type="warning" icon="warning-sign"}} This is a warning alert with icon {{/alert_i}}
<h2>Dismissible Alerts</h2>
{{#alert_x type="warning"}} this is an info alert {{/alert_x}}
{{#alert_x type="info"}} This is an info alert {{/alert_x}}
{{#alert_x type="success"}} This is a success alert with close button {{/alert_x}}
{{#alert_x type="danger"}} This is a danger alert with close button {{/alert_x}}

<h2>Dismissible Alerts - Custom</h2>
{{#alert_x_warning}} this is an warning alert with close button {{/alert_x_warning}}
{{#alert_x_info}} This is an info alert with close button {{/alert_x_info}}
{{#alert_x_success}} This is a success alert with close button {{/alert_x_success}}
{{#alert_x_danger}} This is a danger alert with close button {{/alert_x_danger}}


<h2>Dismissible Alerts with Icons</h2>
{{#alert_ix type="danger" icon="remove"}} This is a danger alert with icon and close button {{/alert_ix}}
{{#alert_ix type="warning" icon="warning-sign"}} This is a warning alert with icon and close button {{/alert_ix}}
{{#alert_ix type="success" icon="ok"}} This is a success alert with icon and close button {{/alert_ix}}
{{#alert_ix type="info" icon="info-sign"}} This is a info alert with icon and close button {{/alert_ix}}

<h2>Dismissible Alerts with Icons - Custom</h2>
{{#alert_ix_danger icon="remove"}} This is a danger alert with icon and close button {{/alert_ix_danger}}
{{#alert_ix_warning icon="warning-sign"}} This is a warning alert with icon and close button {{/alert_ix_warning}}
{{#alert_ix_success icon="ok"}} This is a success alert with icon and close button {{/alert_ix_success}}
{{#alert_ix_info icon="info-sign"}} This is a info alert with icon and close button {{/alert_ix_info}}
```

# Tabs
```bash
<h3>Tabs</h3>
{{#tabs}}
  <!-- Nav tabs -->
  {{#nav_tabs}}
    {{> tab_link active="active" url="#home" title="Home"}}
    {{> tab_link url="#profile" title="Profile"}}
    {{> tab_link url="#messages" title="Messages"}}
    {{> tab_link url="#settings" title="Settings"}}
  {{/nav_tabs}}

  <!-- Tab panes -->
  {{#tab_content}}
    {{#tab_panel active="active" id="home"}}
      <h1>This home content</h1>
    {{/tab_panel}}

    {{#tab_panel id="profile"}}
      <h1>This profile content</h1>
    {{/tab_panel}}

    {{#tab_panel id="messages"}}
      <h1>This is messages content</h1>
    {{/tab_panel}}

    {{#tab_panel id="settings"}}
      <h1>This is settings tab content</h1>
    {{/tab_panel}}

  {{/tab_content}}
{{/tabs}}
```

# Buttons
```bash
{{#btn type="info" id="btnInfo" }} Info Button {{/btn}}
{{#btn type="primary"}} Primary Button {{/btn}}
{{#btn type="success"}} Success Button {{/btn}}
{{#btn type="warning"}} Warning Button {{/btn}}
{{#btn type="danger"}} Danger Button {{/btn}}
{{#btn type="info"}} Info Button {{/btn}}
```

# Panels
```bash
{{#panel type="default" title="Heading"}}
<p> This is panel content</p>
{{/panel}}
<br/> {{#panel type="primary" title="Heading"}}
<p> This is panel content</p>
{{/panel}}
<br/> {{#panel type="info" title="Heading"}}
<p> This is panel content</p>
{{/panel}}
<br/> {{#panel type="warning" title="Heading"}}
<p> This is panel content</p>
{{/panel}}
<br/> {{#panel type="danger" title="Heading"}}
<p> This is panel content</p>
{{/panel}}
<br/> {{#panel type="success" title="Heading"}}
<p> This is panel content</p>
{{/panel}}
<br/>
```

# Dropdowns
```bash
{{#dropdown title="MyDropdown"}}
  {{> dropdown_header title="Fruits"}}
  {{> dropdown_link url="/apple" caption="Apple" disabled="disabled"}}
  {{> dropdown_link url="/orange" caption="Orange"}}
  {{> separator}}
  {{> dropdown_link url="/grapes" caption="Grapes"}}
{{/dropdown}}
```

# Dropup
```bash
{{#dropup title="Animals"}}
  {{> dropdown_link url="/dogs" caption="Dogs"}}
  {{> dropdown_link url="/cats" caption="Cats"}}
  {{> dropdown_link url="/horses" caption="Horses"}}
{{/dropup}}
```

# Button groups
```bash
{{#btn_group}}
<button type="button" class="btn btn-default">Left</button>
<button type="button" class="btn btn-default">Middle</button>
<button type="button" class="btn btn-default">Right</button>
{{/btn_group}}

<br/>
<br/> {{#btn_group_lg}}
<button type="button" class="btn btn-default">Left</button>
<button type="button" class="btn btn-default">Middle</button>
<button type="button" class="btn btn-default">Right</button>
{{/btn_group_lg}}

<br/>
<br/> {{#btn_group_sm}}
<button type="button" class="btn btn-default">Left</button>
<button type="button" class="btn btn-default">Middle</button>
<button type="button" class="btn btn-default">Right</button>
{{/btn_group_sm}}

<br/>
<br/> {{#btn_group_xs}}
<button type="button" class="btn btn-default">Left</button>
<button type="button" class="btn btn-default">Middle</button>
<button type="button" class="btn btn-default">Right</button>
{{/btn_group_xs}}

<br/>
<br/>
<h2>Nesting</h2>
{{#btn_group}}
  <button type="button" class="btn btn-default">1</button>
  <button type="button" class="btn btn-default">2</button>

  {{#btn_group}}
    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
      <li><a href="#">Dropdown link</a></li>
      <li><a href="#">Dropdown link</a></li>
    </ul>
  {{/btn_group}}
{{/btn_group}}

```

## Author ##
  [Rajasegar Chandiran] (http://hangroundtheweb.com/portfolio)
