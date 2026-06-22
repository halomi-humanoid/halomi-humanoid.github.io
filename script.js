const siteData = {
  hero: {
    eyebrow: "HALOMI",
    title:
      "Learning Humanoid Loco-Manipulation with Active Perception from Human Demonstrations",
    subtitle: "",
    authors: [
      { name: "Zehui Zhao", url: "mailto:zzhfro@gmail.com", affiliations: [1], notes: ["*"] },
      { name: "Yuxuan Zhao", url: "#", affiliations: [1], notes: ["*"] },
      { name: "Gaojing Zhang", url: "#", affiliations: [1,2] },
      { name: "Chenxi Liu", url: "#", affiliations: [3] },
      { name: "Maolin Zheng", url: "#", affiliations: [3] },
      { name: "Wenzhao Lian", url: "#", affiliations: [1], notes: ["†"] }
    ],
    affiliations: [
      { id: 1, label: "Shanghai Jiao Tong University", type: "institution" },
      { id: 2, label: "University of Sussex", type: "institution" },
      { id: 3, label: "East China University of Science and Technology", type: "institution" },
      { id: "*", label: "Equal Contribution", type: "note" },
      { id: "†", label: "Corresponding Author", type: "note" }
    ],
    links: [
      { label: "Paper", note: "", icon: "./assets/icons/pdf.png", url: "./assets/halomi.pdf" },
      { label: "arXiv", note: "", icon: "./assets/icons/arxiv.png", url: "https://arxiv.org/abs/2606.18772" },
      // { label: "Video", note: "", icon: "./assets/icons/youtube.svg", url: "#" },
      { label: "Code (Coming Soon)", note: "", icon: "./assets/icons/github.png", disabled: true },
      { label: "Dataset (Coming Soon)", note: "", icon: "./assets/icons/dataset.png", disabled: true }
    ]
  },
  featured: {
    title: "Technical Summary Video",

    embedUrl: "",
    videoUrl: "assets/videos/summary_web.mp4?v=20260618-0631",
    imageUrl: "",
    imageAlt: "Technical summary video",
    posterTitle: "Technical Summary Video",
    posterText: ""
  },
  abstract:
    "Human demonstrations, which can be collected at scale and naturally capture active hand-eye coordination, are a promising data source for learning humanoid loco-manipulation. However, directly transferring human demonstrations to humanoids requires a precise world-frame tracking controller, which is often brittle under Out-of-Distribution (OOD) targets, while human-to-humanoid gaps persist in both egocentric observation and action execution. To address these challenges, we present HALOMI, a scalable framework for learning humanoid loco-manipulation with active perception from human demonstrations. HALOMI extends Universal Manipulation Interface (UMI) with egocentric sensing to collect ego-view and wrist-view observations along with head-hand trajectories at scale. We further propose a manifold-constrained controller that plans in a learned latent behavior manifold to enable precise and robust head-hand tracking in the world frame. To bridge the human-to-humanoid gap, we perform ego-view alignment and introduce a controller-aware reference trajectory adaptation to reduce mismatch in both observation and action execution. We validate HALOMI on a Unitree G1 humanoid robot with an actuated neck across five real-world tasks involving navigation, grasping, bimanual manipulation, whole-body coordination, and dynamic behaviors. Across the three quantitatively evaluated tasks, HALOMI achieves an average success rate of 85%, while additional qualitative demonstrations show its ability to support dynamic tossing and deep-squat grasping.",
  trackingVideos: [
    {
      title: "Omnidirectional Locomotion",
      summary: "The consistent translation command for all upper body goals stimulates the human-like natural walking by the RL controller.",
      accent: "linear-gradient(140deg, rgba(15, 118, 110, 0.95), rgba(31, 36, 48, 0.9))",
      embedUrl: "",
      videoUrl: "assets/videos/loco/walk.mp4"
    },
    {
      title: "In-Place Hand Motion Tracking",
      summary: "Tracking the upper hands motion while maintaing standing balance.",
      accent: "linear-gradient(140deg, rgba(15, 118, 110, 0.95), rgba(31, 36, 48, 0.9))",
      embedUrl: "",
      videoUrl: "assets/videos/loco/stand_arm_moving.mp4"
    },
    {
      title: "Robustness",
      summary: "The robot resists the sudden force exerted by human and recover to the original world frame targets.",
      accent: "linear-gradient(140deg, rgba(107, 33, 168, 0.94), rgba(76, 29, 149, 0.88))",
      embedUrl: "",
      videoUrl: "assets/videos/loco/robustness_mosaic.mp4"
    },
    {
      title: "Ground-to-Stand",
      summary: "The robot could recover from fall down to the target poses",
      accent: "linear-gradient(140deg, rgba(5, 150, 105, 0.94), rgba(17, 24, 39, 0.88))",
      embedUrl: "",
      videoUrl: "assets/videos/loco/recovery.mp4"
    },
    {
      title: "Ground-to-Stand",
      summary: "The robot could recover from fall down to the target poses",
      accent: "linear-gradient(140deg, rgba(5, 150, 105, 0.94), rgba(17, 24, 39, 0.88))",
      embedUrl: "",
      videoUrl: "assets/videos/loco/recovery2.mp4"
    },
    {
      title: "Infeasible Target",
      summary: "The infeasible motion commands will be rejected to be tracking while keeping the closest feasible posture.",
      accent: "linear-gradient(140deg, rgba(14, 116, 144, 0.94), rgba(15, 23, 42, 0.88))",
      embedUrl: "",
      videoUrl: "assets/videos/loco/infeasible_motion.mp4"
    },
    {
      title: "Squat",
      summary: "Whole-body motion with squating and hand motion without fall-off.",
      accent: "linear-gradient(140deg, rgba(37, 99, 235, 0.94), rgba(30, 64, 175, 0.88))",
      embedUrl: "",
      videoUrl: "assets/videos/loco/squat_hand_moving.mp4"
    },
    {
      title: "Human Disturbance",
      summary: "Maintains tracking behavior for upper hands under external human disturbance for humanoid body.",
      accent: "linear-gradient(140deg, rgba(217, 119, 6, 0.95), rgba(127, 29, 29, 0.86))",
      embedUrl: "",
      videoUrl: "assets/videos/loco/human_disturbance_mosaic.mp4"
    },
  ],
  demoTasks: [
    {
      id: "task-01",
      label: "Tabletop Manipulation",
      setups: [
        {
          title: "Pick Bread and Place",
          summary:
            "Pick up the bread and place it at the target plate.",
          accent: "linear-gradient(140deg, rgba(107, 33, 168, 0.94), rgba(76, 29, 149, 0.88))",
          posterTitle: "Pick Bread and Place Rollouts",
          posterText: "20 real-world rollouts with varied bread and target locations",
          tags: ["Grasping", "Placing"],
          embedUrl: "",
          videoUrl: "assets/videos/bread/bread_rollout.mp4"
        },
        // {
        //   title: "Bread Pick & Place",
        //   summary:
        //     "Reach for the bread, pick it up, and place it at the target location with coordinated whole-body motion.",
        //   accent: "linear-gradient(140deg, rgba(107, 33, 168, 0.94), rgba(76, 29, 149, 0.88))",
        //   posterTitle: "Successful trial: OOD",
        //   posterText: "Successful demo which the robot is started in a ood location",
        //   tags: ["Grasping", "Searching", "Placing"],
        //   embedUrl: "",
        //   videoUrl: "assets/videos/bread/bread_robot_ood_state.mp4"
        // },
        {
          title: "Pick Bread and Place",
          summary:
            "Pick up the bread and place it at the target plate.",
          accent: "linear-gradient(140deg, rgba(107, 33, 168, 0.94), rgba(76, 29, 149, 0.88))",
          posterTitle: "OOD Pick Bread and Place",
          posterText: "Bread and plate are placed at unseen locations.",
          tags: ["Grasping", "Placing"],
          embedUrl: "",
          videoUrl: "assets/videos/bread/bread_ood.mp4"
        },
        // {
        //   title: "Bread Pick & Place",
        //   summary:
        //     "Reach for the bread, pick it up, and place it at the target location with coordinated whole-body motion.",
        //   accent: "linear-gradient(140deg, rgba(107, 33, 168, 0.94), rgba(76, 29, 149, 0.88))",
        //   posterTitle: "Successful trial",
        //   posterText: "Successful demo which the bread and disk are located in a ood location with human disturbance",
        //   tags: ["Grasping", "Searching", "Placing"],
        //   embedUrl: "",
        //   videoUrl: "assets/videos/bread/bread_disturbance.mp4"
        // },
        // {
        //   title: "Bottle Transfer",
        //   summary:
        //     "Find the bottle and suqat to grasp the bottle. Then place the bottle inside the backpack located on the top of left cabinet",
        //   accent: "linear-gradient(140deg, rgba(8, 145, 178, 0.94), rgba(30, 41, 59, 0.88))",
        //   posterTitle: "Successful trial",
        //   posterText: "Successful demo 1 for bottle transfer",
        //   tags: ["Squat", "Grasping", "Turning", "Placing"],
        //   embedUrl: "",
        //   videoUrl: "assets/videos/other_tasks/squat1.mp4"
        // },
      ]
    },
    {
      id: "task-02",
      label: "Hand-Eye Coordination\n& Active Perception",
      setups: [
        {
          title: "Transfer Towel to Basket",
          summary:
            "Grasp the towel and transfer it into the basket, which is randomly placed on either side.",
          accent: "linear-gradient(140deg, rgba(14, 116, 144, 0.94), rgba(15, 23, 42, 0.88))",
          posterTitle: "Towel Trial 1",
          posterText: "Successful in-domain rollout",
          tags: ["Bimanual Manipulation", "Active Perception", "Whole-Body Coordination"],
          embedUrl: "",
          videoUrl: "assets/videos/towel/towel2.mp4"
        },
        {
          title: "Transfer Towel to Basket",
          summary:
            "Grasp the towel and transfer it into the basket, which is randomly placed on either side.",
          accent: "linear-gradient(140deg, rgba(14, 116, 144, 0.94), rgba(15, 23, 42, 0.88))",
          posterTitle: "Towel Trial 2",
          posterText: "Successful in-domain rollout",
          tags: ["Bimanual Manipulation", "Active Perception", "Whole-Body Coordination"],
          embedUrl: "",
          videoUrl: "assets/videos/towel/towel3.mp4"
        },
        {
          title: "Transfer Towel to Basket",
          summary:
            "Grasp the towel and transfer it into the basket, which is randomly placed on either side.",
          accent: "linear-gradient(140deg, rgba(14, 116, 144, 0.94), rgba(15, 23, 42, 0.88))",
          posterTitle: "Towel Trial 3",
          posterText: "Successful in-domain rollout",
          tags: ["Bimanual Manipulation", "Active Perception", "Whole-Body Coordination"],
          embedUrl: "",
          videoUrl: "assets/videos/towel/towel4.mp4"
        },
        {
          title: "Transfer Towel to Basket",
          summary:
            "Grasp the towel and transfer it into the basket, which is randomly placed on either side.",
          accent: "linear-gradient(140deg, rgba(14, 116, 144, 0.94), rgba(15, 23, 42, 0.88))",
          posterTitle: "Towel Trial 4",
          posterText: "Successful in-domain rollout",
          tags: ["Bimanual Manipulation", "Active Perception", "Whole-Body Coordination"],
          embedUrl: "",
          videoUrl: "assets/videos/towel/towel5.mp4"
        },
        {
          title: "Transfer Towel to Basket",
          summary:
            "Grasp the towel and transfer it into the basket, which is randomly placed on either side.",
          accent: "linear-gradient(140deg, rgba(14, 116, 144, 0.94), rgba(15, 23, 42, 0.88))",
          posterTitle: "Towel Trial 5",
          posterText: "Successful in-domain rollout",
          tags: ["Bimanual Manipulation", "Active Perception", "Whole-Body Coordination"],
          embedUrl: "",
          videoUrl: "assets/videos/towel/towel6.mp4"
        },
        {
          title: "Transfer Towel to Basket",
          summary:
            "Grasp the towel and transfer it into the basket, which is randomly placed on either side.",
          accent: "linear-gradient(140deg, rgba(14, 116, 144, 0.94), rgba(15, 23, 42, 0.88))",
          posterTitle: "Towel Trial 6",
          posterText: "Successful in-domain rollout",
          tags: ["Bimanual Manipulation", "Active Perception", "Whole-Body Coordination"],
          embedUrl: "",
          videoUrl: "assets/videos/towel/towel7.mp4"
        },
        
      ]
    },
    {
      id: "task-01",
      label: "Navigation",
      setups: [
        // {
        //   title: "Bag Transfer",
        //   summary:
        //     "Walk towards the location of the cabinet and place the backpack on the top of the cabinet.",
        //   accent: "linear-gradient(140deg, rgba(15, 118, 110, 0.95), rgba(31, 36, 48, 0.9))",
        //   posterTitle: "Real world rollouts",
        //   posterText: "20 times real world rollouts with varied location of cabinet",
        //   tags: ["Navigation", "Walking", "Searching", "Placing"],
        //   embedUrl: "",
        //   videoUrl: "assets/videos/bag/bag_rollout.mp4"
        // },
        {
          title: "Bag Transfer",
          summary:
            "Locate the cabinet, navigate to it, and place the backpack on top.",
          accent: "linear-gradient(140deg, rgba(15, 118, 110, 0.95), rgba(31, 36, 48, 0.9))",
          posterTitle: "Bag Trial 1",
          posterText: "Successful in-domain rollout",
          tags: ["Navigation", "Active Perception"],
          embedUrl: "",
          videoUrl: "assets/videos/bag/bag1.mp4"
        },
        {
          title: "Bag Transfer",
          summary:
            "Locate the cabinet, navigate to it, and place the backpack on top.",
          accent: "linear-gradient(140deg, rgba(15, 118, 110, 0.95), rgba(31, 36, 48, 0.9))",
          posterTitle: "Bag Trial 2",
          posterText: "Successful in-domain rollout",
          tags: ["Navigation", "Active Perception"],
          embedUrl: "",
          videoUrl: "assets/videos/bag/bag2.mp4"
        },
        {
          title: "Bag Transfer",
          summary:
            "Locate the cabinet, navigate to it, and place the backpack on top.",
          accent: "linear-gradient(140deg, rgba(15, 118, 110, 0.95), rgba(31, 36, 48, 0.9))",
          posterTitle: "Successful trial: OOD",
          posterText: "The robot transfers the bag to a cabinet placed at a location unseen in the demonstrations",
          tags: ["Navigation", "Active Perception"],
          embedUrl: "",
          videoUrl: "assets/videos/bag/bag_ood_clipped.mp4"
        },
        {
          title: "Bag Transfer",
          summary:
            "Locate the cabinet, navigate to it, and place the backpack on top.",
          accent: "linear-gradient(140deg, rgba(15, 118, 110, 0.95), rgba(31, 36, 48, 0.9))",
          posterTitle: "Failure Case: w/o View Alignment",
          posterText: "Without view alignment, the robot releases the bag too early.",
          tags: ["Navigation", "Active Perception"],
          embedUrl: "",
          videoUrl: "assets/videos/bag/bag_failure_view_align.mp4"
        },
      ]
    },
    {
      id: "task-04",
      label: "Dynamic Capability\n& Deep-Squat Grasp-Place",
      setups: [
        {
          title: "Tossing",
          summary:
            "Toss the ball into the bin.",
          accent: "linear-gradient(140deg, rgba(14, 116, 144, 0.94), rgba(15, 23, 42, 0.88))",
          posterTitle: "Tossing Trial 1",
          posterText: "Successful rollout",
          tags: ["Dynamic Motion"],
          embedUrl: "",
          videoUrl: "assets/videos/tossing/tossing1.mp4"
        },
        {
          title: "Tossing",
          summary:
            "Toss the ball into the bin.",
          accent: "linear-gradient(140deg, rgba(14, 116, 144, 0.94), rgba(15, 23, 42, 0.88))",
          posterTitle: "Tossing Trial 2",
          posterText: "Successful rollout",
          tags: ["Dynamic Motion"],
          embedUrl: "",
          videoUrl: "assets/videos/tossing/tossing2.mp4"
        },
        {
          title: "Tossing",
          summary:
            "Toss the ball into the bin.",
          accent: "linear-gradient(140deg, rgba(14, 116, 144, 0.94), rgba(15, 23, 42, 0.88))",
          posterTitle: "Tossing Trial 3",
          posterText: "Successful rollout",
          tags: ["Dynamic Motion"],
          embedUrl: "",
          videoUrl: "assets/videos/tossing/tossing3.mp4"
        },
        {
          title: "Tossing",
          summary:
            "Toss the ball into the bin.",
          accent: "linear-gradient(140deg, rgba(14, 116, 144, 0.94), rgba(15, 23, 42, 0.88))",
          posterTitle: "Tossing Trial 4",
          posterText: "Successful rollout",
          tags: ["Dynamic Motion"],
          embedUrl: "",
          videoUrl: "assets/videos/tossing/tossing4.mp4"
        },
        {
          title: "Deep-Squat Grasp-Place",
          summary:
            "Squat to grasp the bottle, then place it inside the backpack on the cabinet.",
          accent: "linear-gradient(140deg, rgba(8, 145, 178, 0.94), rgba(30, 41, 59, 0.88))",
          posterTitle: "Bottle Transfer",
          posterText: "Successful rollout",
          tags: ["Deep Squating", "Whole-Body Coordination", "Long-Horizon Manipulation", "Active Perception"],
          embedUrl: "",
          videoUrl: "assets/videos/squat.mp4"
        },
      ]
    }
  ],
  methodSteps: [
    {
      title: "Human Data Collection",
      description:
        "We develop a robot-free egocentric data collection system that combines bimanual UMI-style handheld grippers with a wearable head-mounted egocentric sensing, enabling synchronized collection of multi-view visual observations and corresponding hand-eye motion trajectories.",
      imageUrl: "",
      videoUrl: "assets/videos/data_collection.mp4",
      embedUrl: "",
      mediaAlt: "Human data collection visualization"
    },
    {
      title: "Manifold-Constrained Whole-Body Controller",
      description:
        "We develop a manifold-constrained whole-body controller that tracks a unified set of head-hand world-frame targets. Instead of tracking in the raw joint action space, the controller plans over a learned latent behavior manifold, enabling precise and robust world-frame tracking.",
      imageUrl: "assets/figures/loco_compressed.png",
      videoUrl: "",
      embedUrl: "",
      mediaAlt: "Whole-body latent-manifold controller visualization"
    },
    {
      title: "Human Data Processing to Bridge the Embodiment Gap",
      description:
        "We introduce an automated offline data processing pipeline to reduce the human-to-humanoid embodiment gap in both observation and action spaces. View alignment mitigates visual discrepancies caused by viewpoint mismatch, while controller-aware reference trajectory adaptation reduces execution errors of human head-hand trajectories, mitigating error accumulation during closed-loop rollouts."
    },
  ],
  results: {
    figures: [
      {
        title: "Task Success Rate",
        imageUrl: "assets/figures/bags.png",
        imageAlt: "Bag Transfer",
        caption: "Quantitative Evaluation on Bag Transfer"
      },
      {
        title: "Ablation Study",
        imageUrl: "assets/figures/breads.png",
        imageAlt: "Pick Bread and Place",
        caption: "Quantitative Evaluation on Pick Bread and Place"
      },
      {
        title: "Generalization Analysis",
        imageUrl: "assets/figures/towels.png",
        imageAlt: "Transfer Towel to Basket",
        caption: "Quantitative Evaluation on Transfer Towel to Basket"
      }
    ],
    summary: [],
    findings: [
      {
        text: "",
        videoUrl: "assets/videos/bread/bread_disturbance.mp4",
        embedUrl: ""
      }
    ]
  },
  failureCases: [
    {
      title: "Bag Transfer",
      videoUrl: "assets/videos/overheat/bagoverheat.mp4"
    },
    {
      title: "Pick Bread and Place",
      videoUrl: "assets/videos/overheat/breadoverheat.mp4"
    },
    {
      title: "Towel Transfer",
      videoUrl: "assets/videos/overheat/toweloverheat.mp4"
    }
  ],
  // contact: {
  //   title: "Acknowledgement",
  //   description:
  //     "Use this area for acknowledgements, funding sources, institutional support, collaborators, or open-source dependencies."
  // },
  citation: {
    bibtex: `@article{zhao2026halomi,
  title={HALOMI: Learning Humanoid Loco-Manipulation with Active Perception from Human Demonstrations},
  author={Zhao, Zehui and Zhao, Yuxuan and Zhang, Gaojing and Liu, Chenxi and Zheng, Maolin and Lian, Wenzhao},
  journal={arXiv preprint arXiv:2606.18772},
  year={2026}
}`
  }
};

const $ = (selector) => document.querySelector(selector);

const demoState = {
  taskIndex: 0,
  setupIndex: 0
};

function createHeroLink(link) {
  const template = $("#hero-link-template");
  const baseNode = template.content.firstElementChild.cloneNode(true);
  const isDisabled = Boolean(link.disabled);
  const node = document.createElement(isDisabled ? "div" : "a");
  node.className = baseNode.className;
  node.innerHTML = baseNode.innerHTML;

  const icon = node.querySelector(".hero-link-icon");
  if (link.icon) {
    icon.src = link.icon;
    icon.setAttribute("aria-hidden", "true");
  } else {
    icon.remove();
  }

  node.querySelector(".hero-link-label").textContent = link.label;

  const note = node.querySelector(".hero-link-note");
  if (link.note) {
    note.textContent = link.note;
  } else {
    note.remove();
  }

  if (isDisabled) {
    node.classList.add("disabled");
    node.setAttribute("aria-disabled", "true");
  } else {
    node.classList.add("clickable");
    node.href = link.url || "#";
    node.target = "_blank";
    node.rel = "noreferrer";
  }

  return node;
}

function createPoster(entry) {
  const poster = document.createElement("div");
  poster.className = "poster-panel";
  poster.style.background = entry.accent || "linear-gradient(160deg, #f6fbf9, #ffffff)";
  poster.innerHTML = `<strong>${entry.posterTitle || entry.title}</strong><span>${entry.posterText || ""}</span>`;
  return poster;
}

function renderHero() {
  $("#hero-eyebrow").textContent = siteData.hero.eyebrow;
  $("#hero-title").textContent = siteData.hero.title;

  const heroSubtitle = $("#hero-subtitle");
  if (siteData.hero.subtitle) {
    heroSubtitle.textContent = siteData.hero.subtitle;
  } else {
    heroSubtitle.remove();
  }

  const authorList = $("#author-list");
  siteData.hero.authors.forEach((author, index) => {
    const chip = document.createElement(author.url && author.url !== "#" ? "a" : "span");
    chip.className = "author-chip";

    const name = document.createElement("span");
    name.className = "author-name";
    name.textContent = author.name;
    chip.appendChild(name);

    const marks = [...(author.affiliations || []), ...(author.notes || [])];
    if (marks.length > 0) {
      const sup = document.createElement("sup");
      sup.className = "author-affiliations";
      sup.textContent = marks.join(",");
      chip.appendChild(sup);
    }

    if (chip.tagName === "A") {
      chip.href = author.url;
      if (!author.url.startsWith("mailto:")) {
        chip.target = "_blank";
        chip.rel = "noreferrer";
      }
    }

    authorList.appendChild(chip);

    if (index < siteData.hero.authors.length - 1) {
      const separator = document.createElement("span");
      separator.className = "author-separator";
      separator.textContent = "·";
      authorList.appendChild(separator);
    }
  });

  const affiliationList = $("#affiliation-list");
  const institutionRow = document.createElement("div");
  institutionRow.className = "affiliation-row affiliation-row-institutions";
  const noteRow = document.createElement("div");
  noteRow.className = "affiliation-row affiliation-row-notes";

  siteData.hero.affiliations.forEach((affiliation) => {
    const item = document.createElement("p");
    item.className = `affiliation-item ${affiliation.type === "note" ? "affiliation-note" : ""}`;

    const marker = document.createElement("sup");
    marker.className = "affiliation-marker";
    marker.textContent = affiliation.id;
    item.appendChild(marker);

    const label = document.createElement("span");
    label.textContent = ` ${affiliation.label}`;
    item.appendChild(label);

    if (affiliation.type === "note") {
      noteRow.appendChild(item);
    } else {
      institutionRow.appendChild(item);
    }
  });

  affiliationList.appendChild(institutionRow);
  affiliationList.appendChild(noteRow);

  const heroLinks = $("#hero-links");
  siteData.hero.links.forEach((link) => heroLinks.appendChild(createHeroLink(link)));
}

function renderFeatured() {
  $("#featured-title").textContent = siteData.featured.title;
  $("#featured-description").textContent = siteData.featured.description;

  const frame = $("#featured-media");
  frame.innerHTML = "";

  if (siteData.featured.embedUrl) {
    const iframe = document.createElement("iframe");
    iframe.src = siteData.featured.embedUrl;
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    frame.appendChild(iframe);
    return;
  }

  if (siteData.featured.videoUrl) {
    const video = document.createElement("video");
    video.src = siteData.featured.videoUrl;
    video.controls = true;
    frame.appendChild(video);
    return;
  }

  if (siteData.featured.imageUrl) {
    const image = document.createElement("img");
    image.src = siteData.featured.imageUrl;
    image.alt = siteData.featured.imageAlt || siteData.featured.title;
    frame.appendChild(image);
    return;
  }

  frame.appendChild(createPoster(siteData.featured));
}

function renderOverview() {
  $("#abstract-text").innerHTML = siteData.abstract;
}

function createTrackingCard(entry) {
  const card = document.createElement("article");
  card.className = "tracking-card";

  const media = document.createElement("div");
  media.className = "tracking-media";

  if (entry.embedUrl) {
    const iframe = document.createElement("iframe");
    iframe.src = entry.embedUrl;
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    media.appendChild(iframe);
  } else if (entry.videoUrl) {
    const video = document.createElement("video");
    video.src = entry.videoUrl;
    video.controls = true;
    video.muted = true;
    media.appendChild(video);
  } else {
    media.appendChild(createPoster(entry));
  }

  const body = document.createElement("div");
  body.className = "tracking-card-body";

  const title = document.createElement("h3");
  title.textContent = entry.title;
  body.appendChild(title);

  const summary = document.createElement("p");
  summary.textContent = entry.summary;
  body.appendChild(summary);

  card.appendChild(media);
  card.appendChild(body);

  if (entry.embedUrl || entry.videoUrl) {
    card.classList.add("clickable-media");
    card.addEventListener("click", () => openMedia(entry));
  }

  return card;
}

function renderTrackingVideos() {
  const track = $("#tracking-track");
  track.innerHTML = "";
  siteData.trackingVideos.forEach((entry) => track.appendChild(createTrackingCard(entry)));

  $("#tracking-prev").addEventListener("click", () => {
    track.scrollBy({ left: -track.clientWidth * 0.85, behavior: "smooth" });
  });

  $("#tracking-next").addEventListener("click", () => {
    track.scrollBy({ left: track.clientWidth * 0.85, behavior: "smooth" });
  });
}

function openMedia(entry) {
  if (!entry.embedUrl && !entry.videoUrl) {
    return;
  }

  const modal = $("#media-modal");
  const body = $("#modal-body");
  body.innerHTML = "";

  if (entry.embedUrl) {
    const iframe = document.createElement("iframe");
    iframe.src = entry.embedUrl;
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    body.appendChild(iframe);
  } else {
    const video = document.createElement("video");
    video.src = entry.videoUrl;
    video.controls = true;
    video.autoplay = true;
    body.appendChild(video);
  }

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeMedia() {
  const modal = $("#media-modal");
  $("#modal-body").innerHTML = "";
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

function renderDemoTabs() {
  const root = $("#demo-task-tabs");
  root.innerHTML = "";

  siteData.demoTasks.forEach((task, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "demo-task-tab";
    button.textContent = task.label;

    if (index === demoState.taskIndex) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      demoState.taskIndex = index;
      demoState.setupIndex = 0;
      renderDemos();
    });

    root.appendChild(button);
  });
}

function renderDemoStage() {
  const task = siteData.demoTasks[demoState.taskIndex];
  const setupCount = task.setups.length;
  const setup = task.setups[demoState.setupIndex];
  const root = $("#demo-browser-stage");

  root.innerHTML = `
    <article class="demo-browser-card">
      <div class="demo-browser-heading">
        <h3 class="demo-browser-title"></h3>
        <p class="demo-browser-summary"></p>
      </div>
      <div class="demo-setup-strip">
        <button class="demo-nav-arrow demo-nav-prev" type="button" aria-label="Previous setup">&#8249;</button>
        <div class="demo-setup-status"></div>
        <button class="demo-nav-arrow demo-nav-next" type="button" aria-label="Next setup">&#8250;</button>
      </div>
      <div class="demo-browser-stage-inner">
        <div class="demo-browser-visual">
          <div class="demo-media-shell">
            <div class="demo-browser-frame">
              <div class="demo-frame-media"></div>
              <div class="demo-frame-caption">
                <h4></h4>
                <p></p>
              </div>
            </div>
          </div>
          <div class="tag-row demo-browser-tags"></div>
        </div>
      </div>
    </article>
  `;

  root.querySelector(".demo-browser-title").textContent = setup.title || task.label;
  root.querySelector(".demo-browser-summary").textContent = setup.summary || "";
  root.querySelector(".demo-setup-status").textContent = `${demoState.setupIndex + 1} / ${setupCount}`;

  const tags = root.querySelector(".demo-browser-tags");
  (setup.tags || []).forEach((tag) => {
    const badge = document.createElement("span");
    badge.className = "tag";
    badge.textContent = tag;
    tags.appendChild(badge);
  });

  const frameMedia = root.querySelector(".demo-frame-media");
  const frameCaption = root.querySelector(".demo-frame-caption");
  frameCaption.querySelector("h4").textContent = setup.posterTitle || setup.title || "";
  frameCaption.querySelector("p").textContent = setup.posterText || "";

  if (setup.embedUrl) {
    const iframe = document.createElement("iframe");
    iframe.src = setup.embedUrl;
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    frameMedia.appendChild(iframe);
  } else if (setup.videoUrl) {
    const video = document.createElement("video");
    video.src = setup.videoUrl;
    video.controls = true;
    video.muted = true;
    frameMedia.appendChild(video);
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "demo-media-placeholder";
    placeholder.style.background = setup.accent || "linear-gradient(160deg, #f6fbf9, #ffffff)";
    frameMedia.appendChild(placeholder);
  }

  const prevButton = root.querySelector(".demo-nav-prev");
  const nextButton = root.querySelector(".demo-nav-next");
  prevButton.disabled = setupCount <= 1;
  nextButton.disabled = setupCount <= 1;

  prevButton.addEventListener("click", () => {
    demoState.setupIndex = (demoState.setupIndex - 1 + setupCount) % setupCount;
    renderDemoStage();
  });

  nextButton.addEventListener("click", () => {
    demoState.setupIndex = (demoState.setupIndex + 1) % setupCount;
    renderDemoStage();
  });

}

function renderDemos() {
  renderDemoTabs();
  renderDemoStage();
}

function renderMethodMedia(step, root) {
  if (step.embedUrl) {
    root.classList.add("has-embed");
    const iframe = document.createElement("iframe");
    iframe.src = step.embedUrl;
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    root.appendChild(iframe);
    return true;
  }

  if (step.videoUrl) {
    root.classList.add("has-video");
    const video = document.createElement("video");
    video.src = step.videoUrl;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    root.appendChild(video);
    return true;
  }

  if (step.imageUrl) {
    root.classList.add("has-image");
    const image = document.createElement("img");
    image.src = step.imageUrl;
    image.alt = step.mediaAlt || step.title;
    root.appendChild(image);
    return true;
  }

  return false;
}

function renderMethod() {
  const template = $("#method-template");
  const root = $("#method-steps");

  siteData.methodSteps.forEach((step, index) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector(".step-number").textContent = `${index + 1}`.padStart(2, "0");
    node.querySelector("h3").textContent = step.title;
    node.querySelector("p").textContent = step.description;
    const media = node.querySelector(".method-step-media");
    const hasMedia = renderMethodMedia(step, media);
    if (hasMedia) {
      node.classList.add("has-media");
    } else {
      media.remove();
    }
    root.appendChild(node);
  });

}

function renderResults() {
  const figures = $("#results-figures");
  figures.innerHTML = "";

  siteData.results.figures.forEach((figure) => {
    const card = document.createElement("article");
    card.className = "results-figure-card";

    const visual = document.createElement("div");
    visual.className = "results-figure-visual";

    if (figure.imageUrl) {
      const image = document.createElement("img");
      image.src = figure.imageUrl;
      image.alt = figure.imageAlt || figure.title;
      visual.appendChild(image);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "results-figure-placeholder";
      placeholder.textContent = "Add Result Figure";
      visual.appendChild(placeholder);
    }

    const caption = document.createElement("p");
    caption.textContent = figure.caption;

    card.appendChild(visual);
    card.appendChild(caption);
    figures.appendChild(card);
  });

  const summary = $("#results-summary");
  summary.innerHTML = "";
  (siteData.results.summary || []).forEach((point) => {
    const item = document.createElement("li");
    item.textContent = point;
    summary.appendChild(item);
  });

  const findings = $("#results-findings");
  findings.innerHTML = "";
  siteData.results.findings.forEach((finding) => {
    const text = typeof finding === "string" ? finding : finding.text;
    const item = document.createElement("li");
    item.innerHTML = text;
    if (!text) {
      item.classList.add("media-only");
    }

    if (typeof finding === "object" && (finding.embedUrl || finding.videoUrl)) {
      const media = document.createElement("div");
      media.className = "results-finding-media";

      if (finding.embedUrl) {
        const iframe = document.createElement("iframe");
        iframe.src = finding.embedUrl;
        iframe.title = finding.videoTitle || text.replace(/<[^>]*>/g, "");
        iframe.allow = "autoplay; fullscreen; picture-in-picture";
        iframe.allowFullscreen = true;
        media.appendChild(iframe);
      } else {
        const video = document.createElement("video");
        video.src = finding.videoUrl;
        video.controls = true;
        video.preload = "metadata";
        video.muted = true;
        video.playsInline = true;
        if (finding.videoPoster) {
          video.poster = finding.videoPoster;
        }
        media.appendChild(video);
      }

      item.appendChild(media);
    }

    findings.appendChild(item);
  });
}

function renderFailureCases() {
  const root = $("#failure-strip");
  if (!root) {
    return;
  }

  root.innerHTML = "";
  (siteData.failureCases || []).forEach((entry) => {
    const card = document.createElement("article");
    card.className = "failure-card";

    const media = document.createElement("div");
    media.className = "failure-media";
    const video = document.createElement("video");
    video.src = entry.videoUrl;
    video.controls = true;
    video.preload = "metadata";
    video.muted = true;
    video.playsInline = true;
    media.appendChild(video);

    const title = document.createElement("h3");
    title.textContent = entry.title;

    card.appendChild(media);
    card.appendChild(title);
    root.appendChild(card);
  });
}

// function renderContact() {
//   $("#contact-title").textContent = siteData.contact.title;
//   $("#contact-description").textContent = siteData.contact.description;
// }

function renderCitation() {
  $("#citation-bibtex").textContent = siteData.citation.bibtex;
}

function bindModal() {
  $("#modal-close").addEventListener("click", closeMedia);
  $("#media-modal").addEventListener("click", (event) => {
    if (event.target.id === "media-modal") {
      closeMedia();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMedia();
    }
  });
}

renderHero();
renderFeatured();
renderOverview();
renderTrackingVideos();
renderDemos();
renderMethod();
renderResults();
renderFailureCases();
// renderContact();
renderCitation();
bindModal();
