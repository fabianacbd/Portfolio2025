import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import {
  Meta,
  Schema,
  AvatarGroup,
  Button,
  Column,
  Flex,
  Heading,
  Media,
  Text,
  SmartLink,
  Row,
  Avatar,
  Line,
} from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";
import { Metadata } from "next";
import { Projects } from "@/components/work/Projects";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const project = projects.find((p) => p.slug === slugPath);

  if (!project) return {};

  return Meta.generate({
    title: project.metadata.title,
    description: project.metadata.summary,
    baseURL,
    image:
      project.metadata.image ||
      `/api/og/generate?title=${project.metadata.title}`,
    path: `${work.path}/${project.slug}`,
  });
}


export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const project = projects.find((p) => p.slug === slugPath);

  if (!project) {
    notFound();
  }

  const avatars =
    project.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${project.slug}`}
        title={project.metadata.title}
        description={project.metadata.summary}
        datePublished={project.metadata.publishedAt}
        dateModified={project.metadata.publishedAt}
        image={
          project.metadata.image ||
          `/api/og/generate?title=${encodeURIComponent(
            project.metadata.title
          )}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column maxWidth="s" gap="16" horizontal="center" align="center">
        <SmartLink href="/work">
          <Text variant="label-strong-m">Projects</Text>
        </SmartLink>
        <Text variant="body-default-xs" onBackground="neutral-weak">
          {project.metadata.publishedAt &&
            formatDate(project.metadata.publishedAt)}
        </Text>
        <Heading variant="display-strong-m">
          {project.metadata.title}
        </Heading>
      </Column>

      {project.metadata.team?.length > 0 && (
        <Row gap="16" vertical="center">
          <AvatarGroup reverse avatars={avatars} size="s" />
          <Text variant="label-default-m" onBackground="brand-weak">
            {project.metadata.team.map((member, idx) => (
              <span key={idx}>
                {idx > 0 && ", "}
                <SmartLink href={member.linkedIn}>
                  {member.name}
                </SmartLink>
              </span>
            ))}
          </Text>
        </Row>
      )}

      {project.metadata.images.length > 0 && (
        <Media
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt="image"
          src={project.metadata.images[0]}
        />
      )}

      <Column as="article" maxWidth="xs">
        <CustomMDX source={project.content} />
      </Column>

      <Column fillWidth gap="40" horizontal="center" marginTop="40">
        <Line maxWidth="40" />
        <Heading as="h2" variant="heading-strong-xl">
          Related projects
        </Heading>
        <Projects exclude={[project.slug]} range={[2]} />
      </Column>

      <ScrollToHash />
    </Column>
  );
}

