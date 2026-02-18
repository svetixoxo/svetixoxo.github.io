---
layout: default
permalink: /self-hosting/
title: '/mnt/cloud'
---

{% assign self-hosting_posts = "" | split: "" %}
{% for post in site.posts %}
  {% if post.categories contains "self-hosting" %}
    {% assign self-hosting_posts = self-hosting_posts | push: post %}
  {% endif %}
{% endfor %}

{% if self-hosting_posts.size > 0 %}
  <ul>
  {% for post in self-hosting_posts %}
    <li>
      {{ post.date | date: "%d.%m.%Y" }}: <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
  </ul>
{% else %}
  <p>Keine Self-Hosting-Artikel gefunden.</p>
{% endif %}
