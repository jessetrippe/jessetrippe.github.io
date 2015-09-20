---
layout: default
title: Selected work
excerpt: Selected portfolio pieces of Jesse Trippe.
permalink: /selected-work/
sort_order: 2
---

{% assign projects = site.projects | sort: 'sort_order' %}
{% for project in projects %}

<hr>

<div class="segment">

    <h2 class="font-sm font-md@md push-bottom push-double-bottom@md">
      {{ project.title }}
    </h2>

    {{ project.intro-text }}

    <div class="portfolio-attributes">
        <dl>
            <dt class="text-gray soft-right">Client</dt>
            <dd>{{ project.client }}</dd>
        </dl>
        <dl>
            <dt class="text-gray soft-right">Media</dt>
            <dd>{{ project.media }}</dd>
        </dl>
        <dl>
            <dt class="text-gray soft-right">Role</dt>
            <dd>{{ project.role }}</dd>
        </dl>
        <dl>
            <dt class="text-gray soft-right">Date</dt>
            <dd>{{ project.display-date }}</dd>
        </dl>
    </div>

    {{ project.content }}

</div>

{% endfor %}
